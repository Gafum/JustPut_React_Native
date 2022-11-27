import React from "react"

const objectColor = "#913e5f"
const controlColor = "#f59073"
const propertiesColor = "#96b38e"
const dataColor = "#eb4464"

export const ListOfElements = [
  {
    id: 0, // OBJECT
    code: "element.innerHTML=element.innerHTML+`<p>Text</p>`",
    text: "Create Text by HTML",
    color: objectColor,
    listChengers: ["Text"],
    standartParameter: [["Text"]]
  },
  {
    id: 1, // CONTROL
    code: "function name(params){",
    text: "Function name(params)",
    color: controlColor,
    listChengers: ["name", "params"],
    standartParameter: [["name"], ["params"]],
    secondArgument: [{ code: "}", text: "End" }]
  },
  {
    id: 2, // PROPERTIES
    code: "//Coment",
    text: "Coment",
    color: propertiesColor,
    listChengers: ["Coment"],
    standartParameter: [["Coment"]]
  },
  {
    id: 3, // DATA
    code: "//a = 2",
    text: "Set //a to 2 ",
    color: dataColor,
    listChengers: [["//a"], ["2"]],
    standartParameter: [[" //a"], ["2"]]
  },
  {
    id: 4, // CONTROL
    code: "//code",
    text: "Code: //code",
    color: controlColor,
    listChengers: ["//code"],
    standartParameter: [[" //code"]]
  },
  {
    id: 5, // CONTROL
    code: "//name('a')",
    text: "Call //name('a')",
    color: controlColor,
    listChengers: ["//name", "'a'"],
    standartParameter: [["//name"], ["'a'"]]
  },
  {
    id: 6, // CONTROL
    code: "if(condition){",
    text: "If condition (else)",
    color: controlColor,
    listChengers: ["condition"],
    standartParameter: [[[1], [">"], [0]]],
    secondArgument: [{ code: "}", text: "End" }]
  },
  {
    id: 7, // CONTROL
    code: "if(condition){",
    text: "If condition (else)",
    color: controlColor,
    listChengers: ["condition"],
    standartParameter: [[[1], [">"], [0]]],
    secondArgument: [
      { code: "}else{", text: "Else" },
      { code: "}", text: "End" }
    ]
  }
]
