import React, { useState } from "react"
import { Modal, View, ToastAndroid } from "react-native" // Modal for add block screen
import BtnPlus from "./Editor_Components/FloatAction" // btns:start, plus...
import RenderItem from "./Editor_Components/RenderItem" // render of elements
import { ListOfElements } from "./Lists/ListOfElements" // List of all Elemets
import { useSharedValue } from "react-native-reanimated" // Value Controler for Position
import {
  StringB,
  addPositionValue,
  createListPosition
} from "./Editor_Components/FunctionForEditor" // function that have return
import AddBlock from "./Editor_Components/AddBlock" // Element AddBlock
import EditParams from "./Editor_Components/EditParams"
import CodeforModals from "./Editor_Components/Secondary_Edition_Component/CodeforModals"

export default function Editor({ navigation }) {
  const [List, setList] = useState([])
  const positions = useSharedValue({})
  const scrollY = useSharedValue(0)
  const [whichBtn, setWhichBtn] = useState(0)
  const [whichEdit, setWhichEdit] = useState(0)
  const [editParams, setEditParams] = useState(false)
  const [addBlockVisible, setAddBlockVisible] = useState(false)
  const [newElement, setNewElement] = useState(-1)

  if (Object.keys(positions.value).length == 0) {
    // if Possition array is empty, we add new parameters
    positions.value = createListPosition(List)
  }

  /* add to List new Element */
  function addBlock(element, ...params) {
    setWhichBtn(0)
    let key = Math.random().toString(32).slice(2)
    let newPositionsInList = [key]
    let lengthOfElemnt = 1
    let newElementInList = [
      {
        id: key,
        idOfELement: ListOfElements[element].id,
        parameter: ListOfElements[element].standartParameter,
        text: ListOfElements[element].text
      }
    ] // crete new Element

    if (params.length > 0 /* add second params */) {
      newElementInList[0].adderParams = []
      params.forEach((a, index) => {
        let adderKey = key + "adderParams" + index
        newElementInList.push({
          id: adderKey,
          idOfELement: "A",
          code: a.code,
          color: ListOfElements[element].color,
          text: a.text
        })
        lengthOfElemnt++
        newElementInList[0].adderParams.push(adderKey)
        newPositionsInList.push(adderKey)
      })
    }
    positions.value = addPositionValue({
      object: positions.value,
      func: "add",
      key: newPositionsInList,
      scrollY,
      count: lengthOfElemnt
    }) // add element to positions
    setList([...List, ...newElementInList])
    setNewElement(key)
  }

  /* Start View scene */
  function codeCreator() {
    let c = []
    let a = 0
    positions.value.forEach((i) => {
      a = List.find(({ id }) => id === i)
      c.push(a)
    }) // create list with rigth positions

    if (List[0].listOfData && List[0].listOfData != c[0].listOfData) {
      c[0].listOfData = List[0].listOfData
    } // create data

    let fisrtStrCode = ""
    if (List[0].listOfData && List[0].listOfData.length > 0) {
      fisrtStrCode = List[0].listOfData.reduce((a, b, index) => {
        if (index === List[0].listOfData.length - 1) {
          return a + b
        }
        return a + b + ","
      }, "let ")
    } // create data in html code

    let createdCode = "element.innerHTML=`<h1>Made by Gafum</h1>`"
    if (c.length > 0 && c) {
      createdCode = c.reduce((a, b) => {
        let thisStrb =
          b.idOfELement == "A"
            ? b.code
            : StringB(ListOfElements[b.idOfELement], b.parameter)
        return (
          String(a) +
          `
` +
          thisStrb
        )
      }, String(fisrtStrCode))
    } // create code

    return createdCode
  }

  function ChengeParams(data, newData, newText) {
    let result = JSON.parse(JSON.stringify(List))
    result[whichEdit].parameter = data
    result[whichEdit].text = newText
    result[0].listOfData = newData
    setList(result)
  }

  /* Delete Element from List and Positions */
  function deleteELementList(id) {
    let result = JSON.parse(JSON.stringify(List))

    let idsOfElemnts = [id]
    let adderParams = result.find((element) => element.id === id).adderParams

    /* Delete adder Element */
    if (adderParams && adderParams.length) {
      adderParams.forEach((i) => {
        idsOfElemnts.push(i)
        result = result.filter((element) => element.id !== i)
      })
    }

    /*chenge the position of safed data*/
    if (
      List[0].listOfData &&
      List.findIndex((element) => element.id == id) == 0
    ) {
      if (result[1]) {
        result[1].listOfData = List[0].listOfData
      } else {
        ToastAndroid.showWithGravityAndOffset(
          "Data deleted",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          27
        )
      }
    }

    result = result.filter((element) => element.id !== id)

    setList(result)
    positions.value = addPositionValue({
      object: positions.value,
      func: "delete",
      key: idsOfElemnts
    })
  }

  function findData() {
    if (List.length <= 0) return []
    if (!List[0].listOfData) return []
    return List[0].listOfData
  }

  return (
    <View style={{ flex: 1 }}>
      <RenderItem
        list={List}
        positions={positions}
        deleteELementList={deleteELementList}
        scrollY={scrollY}
        setEditParams={setEditParams}
        setWhichEdit={setWhichEdit}
        newElement={newElement}
        setNewElement={setNewElement}
      />
      <Modal /* AddBLock */
        animationType="slide"
        transparent={false}
        visible={addBlockVisible}
        onRequestClose={() => {
          setAddBlockVisible(false)
        }}
      >
        <CodeforModals
          setEditParams={setEditParams}
          setAddBlockVisible={setAddBlockVisible}
          whichName={whichBtn}
          element={
            <AddBlock
              setAddBlockVisible={setAddBlockVisible}
              addBlock={addBlock}
              whichBtn={whichBtn}
            />
          }
        />
      </Modal>
      <Modal /* EditParamsOfElement */
        animationType="slide"
        transparent={false}
        visible={editParams}
        onRequestClose={() => {
          setEditParams(false)
        }}
      >
        <CodeforModals
          setEditParams={setEditParams}
          setAddBlockVisible={setAddBlockVisible}
          whichName={List[whichEdit] ? List[whichEdit] : ""}
          element={
            <EditParams
              ChengeParams={ChengeParams}
              setEditParams={setEditParams}
              listOfData={findData()}
              element={List[whichEdit] ? List[whichEdit] : ""}
            />
          }
        />
      </Modal>
      <BtnPlus
        start={navigation}
        createCode={codeCreator}
        list={List}
        setAddBlockVisible={setAddBlockVisible}
        setWhichBtn={setWhichBtn}
      />
    </View>
  )
}
