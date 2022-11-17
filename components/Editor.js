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
  function addBlock(element) {
    setWhichBtn(0)
    let key = Math.random().toString(32).slice(2)
    setList([
      ...List,
      {
        id: key,
        idOfELement: ListOfElements[element].id,
        parameter: ListOfElements[element].standartParameter
      }
    ])
    setNewElement(key)
    positions.value = addPositionValue(positions.value, "add", key, scrollY) // add element to positions
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
    if (List[0].listOfData) {
      fisrtStrCode = List[0].listOfData.reduce((a, b, index) => {
        if (index === List[0].listOfData.length - 1) {
          return a + b
        }
        return a + b + ","
      }, "let ")
    } // create data in html code

    let createdCode = "element.innerHTML=`<h1>Made by Gafum</h1>`"
    if (c.length > 0 && c) {
      createdCode = c.reduce(
        (a, b) =>
          String(a) +
          `
` +
          StringB(ListOfElements[b.idOfELement], b.parameter),
        String(fisrtStrCode)
      )
    } // create code

    return createdCode
  }

  function ChengeParams(data, newData) {
    let result = JSON.parse(JSON.stringify(List))
    result[whichEdit].parameter = data
    result[0].listOfData = newData
    setList(result)
  }

  /* Delete Element from List and Positions */
  function deleteELementList(id) {
    if (
      List[0].listOfData &&
      List.findIndex((element) => element.id == id) == 0
    ) {
      if (List[1]) {
        List[1].listOfData = List[0].listOfData
      } else {
        ToastAndroid.showWithGravityAndOffset(
          "Data deleted",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          27
        )
      }
    } // chenge the position of safed data

    setList(List.filter((element) => element.id !== id))
    positions.value = addPositionValue(positions.value, "delete", id)
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
