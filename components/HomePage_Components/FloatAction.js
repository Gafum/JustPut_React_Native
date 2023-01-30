import React from "react"
import { FloatingAction } from "react-native-floating-action"
import { readAsStringAsync, EncodingType } from "expo-file-system" //Save file in device
import { getDocumentAsync } from "expo-document-picker"
import {
  getPermissionsAsync,
  requestPermissionsAsync
} from "expo-media-library"

export default function BtnPlus({ setVisible, setVisibleGS, addProjext }) {
  const readFile = async () => {
    let { status, canAskAgain } = await getPermissionsAsync()
    if (status !== "granted" && canAskAgain) {
      status = await requestPermissionsAsync()
      return
    }
    if (status !== "granted" && !canAskAgain) {
      Alert.alert("Give permission!!!", "We can't use Storage 0(")
      return
    }
    if (status === "granted") {
      try {
        getDocumentAsync().then((data) => {
          readAsStringAsync(data.uri, {
            encoding: EncodingType.UTF8
          })
            .then((jsonValue) => {
              const data = JSON.parse(jsonValue)
              if (data[0].name) {
                addProjext({ myName: data[0].name, addOldProject: jsonValue })
              } else {
                alert("Is not JustPut")
              }
            })
            .catch((err) => {
              alert("We don'n know where file 0( " + err)
            })
        })
      } catch (e) {
        console.log(e)
      }
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
          icon: require("../../assets/save.png"),
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
          : setVisibleGS(true)
      }
    />
  )
}
