import React from "react"
import { Dimensions } from "react-native"

const screenHeight = Dimensions.get("window").height

/* Function that create code "The B(second in reduce) string" */
export function StringB(element, chenger) {
  let result = String(element.code)
  for (let i = 0; i < element.listChengers.length; i++) {
    let realChenge = chenger[i].reduce((a, b) => a + b)
    result = result.replace(element.listChengers[i], realChenge)
  }
  return result
}

export function createListPosition(list) {
  const listPosition = []
  list.forEach((i) => listPosition.push(i.id))
  return listPosition
}

/* Add and Delete element to Position */
export function addPositionValue(object, func, key, scrollY) {
  let result = JSON.parse(JSON.stringify(object)) // render Positions
  if (func == "add") {
    if (object.length * 80 > screenHeight - 100) {
      // height of scrool is bigger then screen
      const positionOfNewElement = Math.max(
        0,
        Math.min(
          Math.floor((scrollY.value + screenHeight / 2 - 75) / 80),
          object.length - 1
        )
      ) // central position where element should spawn
      result.splice(positionOfNewElement, 0, key) // add new Element
    } else {
      result.push(key) // add element in the end of List
    }
  } else if (func == "delete") {
    //delete Element
    result.splice(result.indexOf(key), 1)
  }
  return result
}
