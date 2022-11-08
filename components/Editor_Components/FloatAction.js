import React from "react"
import { FloatingAction } from "react-native-floating-action"
import { actions } from "../Lists/actions"

export default function BtnPlus(props) {
  return (
    <FloatingAction
      color={"#3db05a"}
      actions={actions}
      listenKeyboard={true}
      actionsPaddingTopBottom={3}
      distanceToEdge={{ vertical: 10, horizontal: 10 }}
      onPressItem={(name) => {
        if (name == "bt_start5") {
          // Open WebView
          props.start.navigate("Result", { code: props.createCode(0) })
        }
        // Open AddBlock
        else {
          props.setWhichBtn(+name.charAt(name.length - 1))
          props.setAddBlockVisible(true)
        }
      }}
    />
  )
}
