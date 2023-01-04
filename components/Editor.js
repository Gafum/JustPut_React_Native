import React, { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage" // save / read data
import { WebView } from "react-native-webview"
import Html from "./Editor_Components/HTMLforEditor"
import { View, ActivityIndicator } from "react-native"
import codeCreator from "./Editor_Components/CodeCreator"

export default function Editor({ navigation, route }) {
  const [html, setHtml] = useState("sd")
  const [isLoading, setIsLoading] = useState(true)
  let { idOfProject, nameOfproject } = route.params

  const storeData = async (value) => {
    if (value.endsWith("createCode")) {
      let code = codeCreator(JSON.parse(value.slice(0, -10)))
      navigation.navigate("Result", { code })
      return
    }
    try {
      await AsyncStorage.setItem(idOfProject, value)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(idOfProject)
      setHtml(Html(jsonValue, nameOfproject))
      setIsLoading(false)
    } catch (e) {
      console.error(e)
    }
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#eb4464" />
      </View>
    )
  }

  return (
    <WebView
      onMessage={(data) => storeData(data.nativeEvent.data)}
      source={{ html }}
    />
  )
}
