import React from "react"
import { Text, View } from "react-native"

const ELEMENT_HEIGHT = 80

export function Element({ title, colorText }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        height: ELEMENT_HEIGHT,
        width: 300,
        padding: 10,
        alignItems: "center",
        position: "relative"
      }}
    >
      <View
        style={{
          marginHorizontal: 10
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: colorText,
            marginBottom: 4
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  )
}
