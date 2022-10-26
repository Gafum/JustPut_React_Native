import React from "react"

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
export function addPositionValue(object, func, key) {
  let result = JSON.parse(JSON.stringify(object)) // render Positions
  if (func == "add") {
    result[key] = Object.keys(object).length // add new Element
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
