import React, { useState } from "react"
import { View } from "react-native"
import BtnPlus from "./Editor_Components/FloatAction" // btns:start, plus...
import RenderItem from "./Editor_Components/RenderItem" // render of elements
import { ListOfElements } from "./Lists/ListOfElements" // List of all Elemets
import { useSharedValue } from "react-native-reanimated" // Value Controler for Position
import {
  StringB,
  addPositionValue,
  listToObject
} from "./Editor_Components/FunctionForEditor" // function that have return

let resultList = []

export default function Editor({ navigation, route }) {
  const [List, setList] = useState([
    {
      id: 0,
      idOfELement: 0,
      parameter: ["Text"]
    },
    {
      id: 1,
      idOfELement: 1,
      parameter: ["name"]
    },
    {
      id: 2,
      idOfELement: 0,
      parameter: ["Hi"]
    }
  ])
  const positions = useSharedValue({})

  if (Object.keys(positions.value).length == 0) {
    // if Possition is empty we add new parameters
    positions.value = listToObject(List)
  }

  /* add to List new Element */
  if (route.params) {
    let { element } = route.params
    setList([
      ...List,
      {
        id: List.length,
        idOfELement: ListOfElements[element].id,
        parameter: ListOfElements[element].standartParameter
      }
    ])
    positions.value = addPositionValue(positions.value) // add element to positions
    route.params = "" //clean the chenges
  }

  /* Start View scene */
  function codeCreator() {
    let c = []
    resultList.sort((a, b) => {
      if (a.position > b.position) {
        return 1
      }
      if (a.position < b.position) {
        return -1
      }
      return 0
    })

    resultList.forEach((i) => {
      c.push(List[+i.id])
    })

    let createdCode = "element.innerHTML=`<h1>Made by Gafum</h1>`"
    if (c.length > 0 && c) {
      createdCode = c.reduce(
        (a, b) =>
          String(a) +
          `
` +
          StringB(ListOfElements[b.idOfELement], b.parameter),
        ""
      )
    }
    return createdCode
  }

  /* set list of chenger */
  function chenger(array) {
    let chengerList = []
    Object.keys(array).forEach((i) =>
      chengerList.push({ id: i, position: array[i] })
    )
    resultList = [...chengerList]
  }

  return (
    <View style={{ flex: 1 }}>
      <RenderItem list={List} chenger={chenger} positions={positions} />
      <BtnPlus start={navigation} createCode={codeCreator} list={List} />
    </View>
  )
}
