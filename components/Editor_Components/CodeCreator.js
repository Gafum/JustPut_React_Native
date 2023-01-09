//listOfData    listOfTaps   ListInEditor
import { ListOfElements } from "./ListOfElements"
import Html from "../View_Components/Html" // open Html file

const tapElements = ["14", "16"]

/* Function that create code "The B(second in reduce) string" */
function StringB(element, chenger) {
  let result = String(element.code)
  for (let i = 0; i < element.listChengers.length; i++) {
    let realChenge = chenger[i].reduce((a, b) => a + b)
    result = result.split(element.listChengers[i]).join(realChenge)
  }
  return result
}

export default function codeCreator(data) {
  let listOfData = data[0].data

  let listOfTaps = []
  let fisrtStrCode = ""
  if (listOfData.length > 0) {
    fisrtStrCode = "let " + String(listOfData.reduce((a, b) => a + ", " + b))
  }
  data.shift()
  listOfTaps = data.filter(({ id }) => tapElements.includes(String(id))) // Click =>
  if (listOfTaps.length > 0) {
    fisrtStrCode +=
      `
canva.onclick = (event)=> {` +
      String(
        listOfTaps.reduce(
          (a, b) =>
            a +
            `
` +
            b.nameOfElement +
            "(event)",
          ""
        )
      ) +
      "}"
  }
  listOfTaps = data.filter(({ id }) => id == "25") // MouseMove =>
  if (listOfTaps.length > 0) {
    fisrtStrCode +=
      `
document.addEventListener('mousemove', MouseNowIsMove);
document.addEventListener('touchmove', MouseNowIsMove);
function MouseNowIsMove (event) {` +
      String(
        listOfTaps.reduce(
          (a, b) =>
            a +
            `
` +
            b.nameOfElement +
            "(event)",
          ""
        )
      ) +
      "}"
  }
  let createdCode = "element.innerHTML=`<h1>Made by Gafum</h1>`"
  if (data.length > 0 && data) {
    createdCode = data.reduce((a, b) => {
      let thisStrb =
        b.id.startsWith("AMain") || b.id.startsWith("CONTI")
          ? b.parameter
          : StringB(ListOfElements[b.id], b.parameter)
      return (
        String(a) +
        `
` +
        thisStrb
      )
    }, String(fisrtStrCode))
  } // create code

  return Html(createdCode)
}
