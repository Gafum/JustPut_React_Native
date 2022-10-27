import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native"

/* list of blocks */
const DataObjects = [{ id: 1, text: "Create Text using HTML", idOfELement: 0 }]
const DataControl = [{ id: 1, text: "Crete Function", idOfELement: 1 }]
const DataProperties = [{ id: 1, text: "My Code", idOfELement: 2 }]
const DataData = [{ id: 1, text: "Set variable", idOfELement: 3 }]

export default function AddBlock({ navigation, route }) {
  let { whatColor, whatElements } = route.params // import Color, Element

  /*it is here because we use background color*/
  let styles = StyleSheet.create({
    block: {
      height: 60,
      backgroundColor: whatColor,
      marginBottom: 15,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
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
          navigation.navigate("Editor", { element: item.idOfELement })
        }}
      >
        <View>
          <Text style={styles.what}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  // set list of elements
  function whatData(a) {
    switch (a) {
      case 3:
        return DataData
      case 2:
        return DataObjects
      case 1:
        return DataControl
      case 0:
        return DataProperties
      default:
        console.log("no data")
    }
  }

  return (
    <View>
      <FlatList
        style={{ paddingVertical: 5 }}
        data={whatData(whatElements)}
        initialNumToRender
        renderItem={Item}
      />
    </View>
  )
}
