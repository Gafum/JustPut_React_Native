import React from "react"
import { NavigationContainer } from "@react-navigation/native"

import Navigation from "./Navigation"

const MyTheme = {
  dark: false,
  colors: {
    primary: "balck",
    background: "white",
    card: "black",
    text: "#999"
  }
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Navigation />
    </NavigationContainer>
  )
}
