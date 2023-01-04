import React from "react"
import { WebView } from "react-native-webview"

export default function Result({ route }) {
  let { code } = route.params // import code
  console.log(code)
  return <WebView source={{ html: code }} /> /* show webView */
}
