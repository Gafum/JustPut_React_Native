import React, { useState, useEffect } from "react"
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
  Alert
} from "react-native"
import BtnPlus from "./HomePage_Components/FloatAction" // float Action
import CreateProject from "./HomePage_Components/CreateProject" //Dialog
import AsyncStorage from "@react-native-async-storage/async-storage" // Save/read Data
import { FlashList } from "@shopify/flash-list"

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
          navigation.navigate("Editor", { idOfProject: item.id })
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
        <TouchableOpacity
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
      <BtnPlus setVisible={setVisible} setListOfProjects={setListOfProjects} />
      <CreateProject
        visible={visible}
        setVisible={setVisible}
        listOfProjects={listOfProjects}
        setListOfProjects={setListOfProjects}
      />
    </View>
  )
}
