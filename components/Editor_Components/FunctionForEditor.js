import React from "react"
import { Dimensions } from "react-native"

const screenHeight = Dimensions.get("window").height

/* Function that create code "The B(second in reduce) string" */
export function StringB(element, chenger) {
  let result = element.code
  for (let i = 0; i < element.listChengers.length; i++) {
    result = String(element.code.replace(element.listChengers[i], chenger[i]))
  }
  return result
}

export function listToObject(list) {
  const values = Object.values(list)
  const object = {}
  for (let i = 0; i < values.length; i++) {
    object[values[i].id] = i
  }
  return object
}

/* Add and Delete element to Position */
export function addPositionValue(object, func, key, scrollY) {
  let result = JSON.parse(JSON.stringify(object)) // render Positions
  if (func == "add") {
    let LenghtOfList = Object.keys(object).length
    if (LenghtOfList * 80 > screenHeight - 100) {
      // height of scrool is bigger then screen
      const positionOfNewElement = Math.max(
        0,
        Math.min(
          Math.floor((scrollY.value + screenHeight / 2 - 75) / 80),
          LenghtOfList - 1
        )
      ) // central position where element should spawn
      Object.keys(object).map((a) => {
        if (result[a] >= positionOfNewElement) {
          result[a] = result[a] + 1
        }
      }) // add 1 to element that stay heighter then new element
      result[key] = positionOfNewElement // add new Element
    } else {
      result[key] = LenghtOfList // add element in the end of List
    }
  } else if (func == "delete") {
    //delete Element
    Object.keys(object).map((a) => {
      if (result[a] > result[key]) {
        result[a] = result[a] - 1
      }
    })
    delete result[key]
  }
  return result
}
