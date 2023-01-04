//listOfData    listOfTaps   ListInEditor
import { ListOfElements } from "./ListOfElements"
import Html from "../View_Components/Html" // open Html file

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
  let listOfTaps = data[0].taps
  let fisrtStrCode = ""
  if (listOfData.length > 0) {
    fisrtStrCode = "let " + String(listOfData.reduce((a, b) => a + ", " + b))
  }
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
            b +
            "(event)",
          ""
        )
      ) +
      "}"
  }
  data.shift()
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
