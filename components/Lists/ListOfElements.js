import React from "react"

const objectColor = "#913e5f"
const controlColor = "#f59073"
const propertiesColor = "#96b38e"
const dataColor = "#eb4464"

export const ListOfElements = [
  {
    id: 0, // OBJECT
    code: "element.innerHTML=element.innerHTML+`<p>Text</p>`",
    text: "create Text by HTML",
    color: objectColor,
    listChengers: ["Text"],
    standartParameter: [["Text"]]
  },
  {
    id: 1, // CONTROL
    code: "element.innerHTML=element.innerHTML+`<p>function</p>`",
    text: "create function by HTML",
    color: controlColor,
    listChengers: ["function"],
    standartParameter: [["name"]]
  },
  {
    id: 2, // PROPERTIES
    code: "//coment",
    text: "coment",
    color: propertiesColor,
    listChengers: ["coment"],
    standartParameter: [["coment"]]
  },
  {
    id: 3, // DATA
    code: "//a = 0",
    text: "Set variable",
    color: dataColor,
    listChengers: [["//a"], ["0"]],
    standartParameter: [["//a"], ["0"]]
  },
  {
    id: 4, // CONTROL
    code: "//code",
    text: "my code",
    color: controlColor,
    listChengers: ["//code"],
    standartParameter: [["//code"]]
  }
]
