import React, { useState, useEffect } from "react"
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
  Alert,
  ToastAndroid
} from "react-native"
import BtnPlus from "./HomePage_Components/FloatAction" // float Action
import CreateProject from "./HomePage_Components/CreateProject" //Dialog
import AsyncStorage from "@react-native-async-storage/async-storage" // Save/read Data
import { FlashList } from "@shopify/flash-list"
import * as FileSystem from "expo-file-system" //Save file in device
const { StorageAccessFramework } = FileSystem

const Colors = ["#96b38e", "#f59073", "#913e5f", "#eb4464"]

const saveFile = async ({ idOfProject = "Bye World", myName = "test" }) => {
  try {
    const permissions =
      await StorageAccessFramework.requestDirectoryPermissionsAsync()
    let data = await AsyncStorage.getItem(idOfProject)
    if (permissions.granted && data) {
      // Get the directory uri that was approved
      let directoryUri = permissions.directoryUri
      // Create file and pass it's SAF URI
      await StorageAccessFramework.createFileAsync(
        directoryUri,
        myName +
          String(Date.now() + Math.random().toString(32).slice(4)) +
          ".justput",
        ".justput"
      )
        .then(async (fileUri) => {
          // Save data to newly created file
          await FileSystem.writeAsStringAsync(fileUri, data, {
            encoding: FileSystem.EncodingType.UTF8
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
      alert("You must allow permission to save.")
    }
  } catch (err) {
    console.warn(err)
  }
}

export default function HomePage({ navigation }) {
  const [visible, setVisible] = useState(false)
  const [listOfProjects, setListOfProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@List_Projects")
      setListOfProjects(jsonValue ? JSON.parse(jsonValue) : [])
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
            fontSize: 19
          }}
        >
          {item.name}
        </Text>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity //save project
            style={{ marginRight: 12 }}
            onPress={() => {
              saveFile({ idOfProject: item.id, myName: item.name })
            }}
          >
            <Image
              style={{
                height: 25,
                width: 25
              }}
              source={require("../assets/save.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity //dalete project
            onPress={() => {
              Alert.alert(
                "Delete!!!",
                item.name,
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => removeItemValue(item.id) }
                ],
                {
                  cancelable: true
                }
              )
            }}
          >
            <Image
              style={{
                height: 30,
                width: 30
              }}
              source={require("../assets/delete.png")}
            />
          </TouchableOpacity>
        </View>
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
    <View style={{ flex: 1 }}>
      <FlashList
        data={listOfProjects}
        estimatedItemSize={15}
        renderItem={Item}
      />
      <BtnPlus setVisible={setVisible} addProjext={addProjext} />
      <CreateProject
        visible={visible}
        setVisible={setVisible}
        addProjext={addProjext}
      />
    </View>
  )
}
