import React, { useState } from "react"
import { StatusBar, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import * as Font from "expo-font"

import Navigation from "./Navigation"

const MyTheme = {
  dark: false,
  colors: {
    primary: "#000",
    background: "white",
    card: "#000",
    text: "#999"
  }
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  async function loadAppAplication() {
    await Font.loadAsync({
      "calibri-regular": require("./assets/fonts/Calibri.ttf"),
      "calibri-bold": require("./assets/fonts/Calibri_Bold.ttf")
    })
    setIsLoading(false)
  }

  if (isLoading) {
    loadAppAplication()
    return <View></View>
  } else {
    return (
      <NavigationContainer theme={MyTheme}>
        <Navigation />
        <StatusBar StatusBarStyle={"light-content"} />
      </NavigationContainer>
    )
  }
}
