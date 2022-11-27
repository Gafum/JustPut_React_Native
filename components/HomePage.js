import React, { useState, useEffect } from "react"
import { Text, TouchableOpacity, View, ActivityIndicator } from "react-native"
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

  function Item({ item }) {
    return (
      <TouchableOpacity
        opacity={0.7}
        style={{
          height: 60,
          marginBottom: 15,
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
          paddingHorizontal: 15,
          backgroundColor: item.color
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
