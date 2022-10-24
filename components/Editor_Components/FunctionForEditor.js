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
  const values = Object.values(list);
  const object = {};
  for (let i = 0; i < values.length; i++) {
    object[values[i].id] = i;
  }
  return object;
}

/* Add element to Position */
export function addPositionValue(object) {
	let result = JSON.parse(JSON.stringify(object)) // render Positions
  result[Object.keys(object).length] = Object.keys(object).length // Add new Element
  return result
}
