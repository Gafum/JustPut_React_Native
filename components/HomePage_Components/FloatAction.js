import React from "react"
import { FloatingAction } from "react-native-floating-action"

export default function BtnPlus({ setVisible }) {
  return (
    <FloatingAction
      color={"#3db05a"}
      actions={[
        {
          text: "Create Project",
          icon: require("../../assets/properties.png"),
          name: "createProject",
          position: 0,
          color: "#3db05a",
          textColor: "#888",
          textStyle: {
            fontFamily: "calibri-regular",
            fontSize: 16,
            lineHeight: 18
          }
        },
        {
          text: "Settings",
          icon: require("../../assets/delete.png"),
          name: "Settings",
          position: 1,
          color: "#3db05a",
          textColor: "#888",
          textStyle: {
            fontFamily: "calibri-regular",
            fontSize: 16,
            lineHeight: 18
          }
        }
      ]}
      showBackground={false}
      actionsPaddingTopBottom={3}
      distanceToEdge={{ vertical: 10, horizontal: 10 }}
      onPressItem={(name) =>
        name == "createProject" ? setVisible(true) : alert("not now(((")
      }
    />
  )
}
