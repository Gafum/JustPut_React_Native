import React from "react"
import { StatusBar } from "react-native"
import { NavigationContainer } from "@react-navigation/native"

import Navigation from "./Navigation"

const MyTheme = {
  dark: false,
  colors: {
    primary: "balck",
    background: "#28374d",
    card: "black",
    text: "#999"
  }
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigation />
      <StatusBar hidden />
    </NavigationContainer>
  )
}
