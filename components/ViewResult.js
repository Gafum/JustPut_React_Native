import React from "react"
import AsyncStorage from "@react-native-async-storage/async-storage" // save / read data
import { WebView } from "react-native-webview"

export default function Result({ route }) {
  let { code, idOfProject } = route.params // import code
  console.log(code)

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem(
        idOfProject + "savedValue",
        value.nativeEvent.data
      )
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <WebView source={{ html: code }} onMessage={storeData} />
  ) /* show webView */
}
