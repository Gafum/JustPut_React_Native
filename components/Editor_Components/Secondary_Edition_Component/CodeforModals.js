import React, { useState } from "react"
import { Text, View, TouchableOpacity } from "react-native"

export default function CodeforModals({
  element,
  setEditParams,
  setAddBlockVisible,
  whichName
}) {
  function whatName(a) {
    switch (a) {
      case 5:
        return "Edit Formul"
      case 4:
        return "Data"
      case 3:
        return "Objects"
      case 2:
        return "Control"
      case 1:
        return "Properties"
      default:
        return "Select"
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "black",
          paddingHorizontal: 15
        }}
      >
        <Text
          style={{
            fontFamily: "calibri-regular",
            color: "#999",
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
              color: "white",
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
