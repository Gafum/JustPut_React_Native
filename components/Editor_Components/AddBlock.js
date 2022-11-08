import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native"
import {
  DataData,
  DataObjects,
  DataControl,
  DataProperties
} from "../Lists/ListButInAddBLock"

export default function AddBlock({ setAddBlockVisible, addBlock, whichBtn }) {
  const styles = StyleSheet.create({
    block: {
      height: 60,
      marginBottom: 15,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: whatData(whichBtn)[1]
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
          addBlock(item.idOfELement)
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
        return [DataData, "#eb4464"]
      case 3:
        return [DataObjects, "#913e5f"]
      case 2:
        return [DataControl, "#f59073"]
      case 1:
        return [DataProperties, "#96b38e"]
      default:
        console.log("no data")
    }
  }

  return (
    <FlatList
      style={{ paddingVertical: 5 }}
      data={whatData(whichBtn)[0]}
      initialNumToRender
      renderItem={Item}
    />
  )
}
