import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button
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
        return [DataData, "#eb4464", "Data"]
      case 3:
        return [DataObjects, "#913e5f", "Objects"]
      case 2:
        return [DataControl, "#f59073", "Control"]
      case 1:
        return [DataProperties, "#96b38e", "Properties"]
      default:
        console.log("no data")
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
        <Text style={{ color: "#999", fontSize: 30, lineHeight: 37 }}>
          {whatData(whichBtn)[2]}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#913e5f",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25
          }}
          onPress={() => setAddBlockVisible(false)}
        >
          <Text style={{ color: "white", fontSize: 30, lineHeight: 39 }}>
            X
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          style={{ paddingVertical: 5 }}
          data={whatData(whichBtn)[0]}
          initialNumToRender
          renderItem={Item}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      ></View>
    </View>
  )
}
