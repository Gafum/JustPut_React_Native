import React from "react"
import { FloatingAction } from "react-native-floating-action"
import * as FileSystem from "expo-file-system" //Save file in device
import * as DocumentPicker from "expo-document-picker"

export default function BtnPlus({ setVisible, addProjext }) {
  const readFile = async () => {
    try {
      DocumentPicker.getDocumentAsync().then((data) => {
        console.log(data.uri)
        FileSystem.readAsStringAsync(data.uri, {
          encoding: FileSystem.EncodingType.UTF8
        })
          .then((jsonValue) => {
            const data = JSON.parse(jsonValue)
            if (data[0].name) {
              addProjext({ myName: data[0].name, addOldProject: jsonValue })
            } else {
              console.log("Is not JustPut")
            }
          })
          .catch((err) => {
            console.log("getFile -> err", err)
          })
      })
    } catch (e) {
      console.log(e)
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
          position: 2,
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
          icon: require("../../assets/settings-btn.png"),
          name: "Settings",
          position: 0,
          color: "#f59073",
          textColor: "#888",
          textStyle: {
            fontFamily: "calibri-regular",
            fontSize: 16,
            lineHeight: 18
          }
        },
        {
          text: "Import",
          icon: require("../../assets/settings-btn.png"),
          name: "import",
          position: 1,
          color: "#eb4464",
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
        name == "createProject"
          ? setVisible(true)
          : name == "import"
          ? readFile()
          : alert("not now")
      }
    />
  )
}
