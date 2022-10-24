import React from "react"
import { WebView } from "react-native-webview"
import Html from "./View_Components/Html" // open Html file

export default function Redult({ route }) {
  let { code } = route.params // import code
  let html = Html(code) // set code to html
  return <WebView source={{ html }} /> /* show webView */
}
