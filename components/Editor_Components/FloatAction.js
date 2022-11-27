import React, { useState } from "react"
import { FloatingAction } from "react-native-floating-action"
import { actions } from "../Lists/actions"

export default function BtnPlus({
  start,
  createCode,
  setWhichBtn,
  setAddBlockVisible
}) {
  return (
    <FloatingAction
      color={"#3db05a"}
      actions={actions}
      listenKeyboard={true}
      dismissKeyboardOnPress={true}
      actionsPaddingTopBottom={3}
      onPressBackdrop={() => console.log("Close")}
      distanceToEdge={{ vertical: 10, horizontal: 10 }}
      onPressItem={(name) => {
        if (name == "bt_start5") {
          // Open WebView
          start.navigate("Result", { code: createCode(0) })
        }
        // Open AddBlock
        else {
          setWhichBtn(+name.charAt(name.length - 1))
          setAddBlockVisible(true)
        }
      }}
    />
  )
}
