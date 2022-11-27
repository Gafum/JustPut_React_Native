import React from "react"
import { FloatingAction } from "react-native-floating-action"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function BtnPlus({ setVisible, setListOfProjects }) {
  const clearData = async () => {
    try {
      await AsyncStorage.setItem("@List_Projects", "")
      setListOfProjects([])
    } catch (e) {
      console.error(e)
    }
  }
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
          text: "clean",
          icon: require("../../assets/delete.png"),
          name: "clean data",
          position: 1,
          color: "#3db05a",
          textColor: "#888"
        }
      ]}
      showBackground={false}
      actionsPaddingTopBottom={3}
      distanceToEdge={{ vertical: 10, horizontal: 10 }}
      onPressItem={(name) =>
        name == "createProject" ? setVisible(true) : clearData()
      }
    />
  )
}
