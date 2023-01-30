import { useState, useEffect } from "react"
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
  Alert,
  ToastAndroid
} from "react-native"
import { FlashList } from "@shopify/flash-list" // View List
import {
  StorageAccessFramework,
  writeAsStringAsync,
  EncodingType
} from "expo-file-system" //Save file in device
import {
  getPermissionsAsync,
  requestPermissionsAsync
} from "expo-media-library" // get permission to use storage
import AsyncStorage from "@react-native-async-storage/async-storage" // Save/read Data

import BtnPlus from "./HomePage_Components/FloatAction" // Float Action
import CreateProject from "./HomePage_Components/CreateProject" // Dialog (input text name)
import GeneralSettings from "./HomePage_Components/GeneralSetting" // Dialog (settings)
import SettingOfProject from "./HomePage_Components/SettingOfProjects"
import codeCreator from "./Editor_Components/CodeCreator" // Create html file

const Colors = ["#96b38e", "#f59073", "#913e5f", "#eb4464"]

const saveFile = async ({
  idOfProject = undefined,
  myName = "test",
  myType = "html"
}) => {
  let { status, canAskAgain } = await getPermissionsAsync()
  if (status !== "granted" && canAskAgain) {
    status = await requestPermissionsAsync()
    return
  }
  if (status !== "granted" && !canAskAgain) {
    Alert.alert("Give permission!!!", "We can't use Storage 0(")
    return
  }
  if (status === "granted") {
    try {
      let data = ""
      if (idOfProject) {
        let jsonValue = await AsyncStorage.getItem(idOfProject)
        if (myType == "html") {
          data = await codeCreator(JSON.parse(jsonValue))
        } else if (myType == "justput") {
          data = jsonValue
        }
      } else {
        return
      }
      const permissions =
        await StorageAccessFramework.requestDirectoryPermissionsAsync()
      if (permissions.granted && data) {
        // Get the directory uri that was approved
        let directoryUri = permissions.directoryUri
        // Create file and pass it's SAF URI
        await StorageAccessFramework.createFileAsync(
          directoryUri,
          myName +
            String(Date.now() + Math.random().toString(32).slice(4)) +
            "." +
            myType,
          myType == "html" ? "text/html" : "application/json"
        )
          .then(async (fileUri) => {
            // Save data to newly created file
            await writeAsStringAsync(fileUri, data, {
              encoding: EncodingType.UTF8
            })
            ToastAndroid.showWithGravityAndOffset(
              "File save)))",
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
              25,
              50
            )
          })
          .catch((e) => {
            console.log(e)
          })
      } else {
        Alert.alert(
          "Directory is " + permissions.directoryUri,
          "We don'n know where to put file 0("
        )
      }
    } catch (err) {
      console.warn(err)
    }
  }
}

export default function HomePage({ navigation }) {
  const [visible, setVisible] = useState(false) // Dialog Create Project
  const [visibleGS, setVisibleGS] = useState(false) // Dialog General Setiings
  const [visibleSP, setVisibleSP] = useState(false) // Dialog Setting of the Project
  const [listOfProjects, setListOfProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [theme, setTheme] = useState(undefined)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem("@List_Projects")
      setListOfProjects(jsonValue ? JSON.parse(jsonValue) : [])
      jsonValue = await AsyncStorage.getItem("@Theme")
      setTheme(JSON.parse(jsonValue))
      setIsLoading(false)
    } catch (e) {
      console.error(e)
    }
  }

  async function removeItemValue(key) {
    try {
      let result = listOfProjects.filter((i) => i.id !== key)
      await AsyncStorage.setItem("@List_Projects", JSON.stringify(result))
      await AsyncStorage.removeItem(key)
      setListOfProjects(result)
    } catch (e) {
      console.error(e)
    }
  }

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@List_Projects", value)
    } catch (e) {
      console.error(e)
    }
  }

  function addProjext({ myName = "Example", addOldProject = false }) {
    let newListOfPr = [
      ...listOfProjects,
      {
        name: myName,
        color: Colors[Math.floor(Math.random() * Colors.length)],
        id: "@" + Math.random().toString(32).slice(2)
      }
    ]

    storeData(JSON.stringify(newListOfPr))
    setListOfProjects(newListOfPr)
    if (addOldProject) {
      try {
        AsyncStorage.setItem(
          newListOfPr[newListOfPr.length - 1].id,
          addOldProject
        )
      } catch (e) {
        console.error(e)
      }
    }
  }

  function Item({ item }) {
    return (
      <TouchableOpacity
        opacity={0.7}
        style={{
          height: 60,
          marginBottom: 15,
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 15,
          backgroundColor: item.color,
          flexDirection: "row"
        }}
        onPress={() => {
          navigation.navigate("Editor", {
            idOfProject: item.id,
            nameOfproject: item.name
          })
        }}
      >
        <Text
          style={{
            fontFamily: "calibri-bold",
            textAlign: "center",
            color: "black",
            fontSize: 23,
            lineHeight: 25
          }}
        >
          {item.name}
        </Text>
        <TouchableOpacity //dalete project
          onPress={() => {
            setVisibleSP(item)
          }}
        >
          <Image
            style={{
              height: 34,
              width: 34
            }}
            source={require("../assets/settings-btn.png")}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#eb4464" />
      </View>
    )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme ? "#333366" : "#fff"
      }}
    >
      <FlashList
        data={listOfProjects}
        estimatedItemSize={15}
        renderItem={Item}
      />
      <BtnPlus
        setVisible={setVisible}
        setVisibleGS={setVisibleGS}
        addProjext={addProjext}
      />
      <CreateProject
        visible={visible}
        setVisible={setVisible}
        addProjext={addProjext}
      />
      <GeneralSettings
        visible={visibleGS}
        setVisible={setVisibleGS}
        setTheme={setTheme}
        theme={theme}
      />
      <SettingOfProject
        visible={visibleSP}
        setVisible={setVisibleSP}
        listOfProjects={listOfProjects}
        setListOfProjects={setListOfProjects}
        storeData={storeData}
        removeItemValue={removeItemValue}
        saveFile={saveFile}
      />
    </View>
  )
}
