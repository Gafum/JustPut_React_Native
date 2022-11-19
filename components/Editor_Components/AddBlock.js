import React from "react"
import { Text, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import { ListOfElements } from "../Lists/ListOfElements"

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
        style={styles.block}
        onPress={() => {
          setAddBlockVisible(false)
          if (item.secondArgument) {
            addBlock(item.id, item.secondArgument)
          } else {
            addBlock(item.id)
          }
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
    <FlatList
      style={{ paddingVertical: 5 }}
      data={whatData(whichBtn)}
      initialNumToRender
      renderItem={Item}
    />
  )
}
