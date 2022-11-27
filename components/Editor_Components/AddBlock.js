import React from "react"
import { Text, StyleSheet, TouchableOpacity } from "react-native"
import { ListOfElements } from "../Lists/ListOfElements"
import { FlashList } from "@shopify/flash-list"

export default function AddBlock({ setAddBlockVisible, addBlock, whichBtn }) {
  const styles = StyleSheet.create({
    block: {
      height: 60,
      marginBottom: 15,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: whatData(whichBtn)[0].color
    },
    what: {
      fontFamily: "calibri-bold",
      textAlign: "center",
      color: "white",
      fontSize: 19
    }
  })

  /* RENDER OF ITEMS ONLY TEXT */
  function Item({ item }) {
    return (
      <TouchableOpacity
        opacity={0.7}
        style={styles.block}
        onPress={() => {
          setAddBlockVisible(false)
          addBlock(item.id)
        }}
      >
        <Text style={styles.what}>{item.text}</Text>
      </TouchableOpacity>
    )
  }

  // set list of elements
  function whatData(a) {
    switch (a) {
      case 4:
        return ListOfElements.filter((element) => element.color == "#eb4464")
      case 3:
        return ListOfElements.filter((element) => element.color == "#913e5f")
      case 2:
        return ListOfElements.filter((element) => element.color == "#f59073")
      case 1:
        return ListOfElements.filter((element) => element.color == "#96b38e")
      default:
        console.log("no data")
    }
  }

  return (
    <FlashList
      estimatedItemSize={15}
      data={whatData(whichBtn)}
      renderItem={Item}
    />
  )
}
