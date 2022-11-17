import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import { ListOfElements } from "../../Lists/ListOfElements"

export default function CodeforModals({
  element,
  setEditParams,
  setAddBlockVisible,
  whichName
}) {
  function whatName(a) {
    switch (a) {
      case 4:
        return "Data"
      case 3:
        return "Objects"
      case 2:
        return "Control"
      case 1:
        return "Properties"
      default:
        return "Edit Paramater"
    }
  }

  let backgroundColorOfSelecter = "black"
  let colorOfTextInSelecter = "#999"

  if (typeof whichName === "object") {
    backgroundColorOfSelecter = ListOfElements[whichName.idOfELement].color
    colorOfTextInSelecter = "black"
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: backgroundColorOfSelecter,
          paddingHorizontal: 15
        }}
      >
        <Text
          style={{
            fontFamily: "calibri-regular",
            color: colorOfTextInSelecter,
            fontSize: 30,
            lineHeight: 37
          }}
        >
          {whatName(whichName)}
        </Text>
        <TouchableOpacity
          style={{
            width: 70,
            height: 50,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => {
            setEditParams(false)
            setAddBlockVisible(false)
          }}
        >
          <Text
            style={{
              color: colorOfTextInSelecter,
              fontSize: 30,
              lineHeight: 39,
              fontFamily: "calibri-bold"
            }}
          >
            X
          </Text>
        </TouchableOpacity>
      </View>
      {element}
    </View>
  )
}
