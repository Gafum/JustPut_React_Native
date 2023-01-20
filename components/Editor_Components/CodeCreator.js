//listOfData    listOfTaps   ListInEditor
import { ListOfElements } from "./ListOfElements"
import Html from "../View_Components/Html" // open Html file
import { tapElements } from "./ListOfElements" // 0,1 - Clicks; 2 - MouseMove; 3 - EndOfTheTouching

/* Function that create code "The B(second in reduce) string" */
function StringB(element, chenger) {
  let result = String(element.code)
  if (element.standartParameter && element.listChengers) {
    for (let i = 0; i < element.listChengers.length; i++) {
      let realChenge
      if (!chenger[i]) {
        chenger[i] = element.standartParameter[i]
      }
      realChenge = chenger[i].reduce((a, b) => a + b)
      result = result.split(element.listChengers[i]).join(realChenge)
    }
  }
  return result
}

export default function codeCreator(data) {
  let listOfData = data[0].data

  let listOfTaps = []
  let fisrtStrCode = "document.title = '" + data[0].name + "'"
  if (listOfData.length > 0) {
    fisrtStrCode +=
      `
let ` + String(listOfData.reduce((a, b) => a + ", " + b))
  }
  data.shift()
  listOfTaps = data.filter(
    ({ id }) => id == tapElements[0] || id == tapElements[1]
  ) // Click =>
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
            b.parameter[1] +
            "(event)",
          ""
        )
      ) +
      "}"
  }
  listOfTaps = data.filter(({ id }) => id == tapElements[2]) // MouseMove =>
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
            b.parameter[1] +
            "(event)",
          ""
        )
      ) +
      "}"
  }
  listOfTaps = data.filter(({ id }) => id == tapElements[3]) // EndOfTheTouching (Mouse up) =>
  if (listOfTaps.length > 0) {
    fisrtStrCode +=
      `
document.addEventListener('mouseup', EndOfTheTouching);
document.addEventListener('touchend', EndOfTheTouching);
document.addEventListener('touchcancel', EndOfTheTouching);
function EndOfTheTouching(event) {` +
      String(
        listOfTaps.reduce(
          (a, b) =>
            a +
            `
` +
            b.parameter[1] +
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
          ? ListOfElements[b.id.slice(6)].secondArgument[b.id[5]].code
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
