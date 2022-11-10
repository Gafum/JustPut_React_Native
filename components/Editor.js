import React, { useState } from "react"
import { Modal, View, Text } from "react-native" // Modal for add block screen
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
    })

    let createdCode = "element.innerHTML=`<h1>Made by Gafum</h1>`"
    if (c.length > 0 && c) {
      createdCode = c.reduce(
        (a, b) =>
          String(a) +
          `
` +
          StringB(ListOfElements[b.idOfELement], b.parameter),
        ""
      )
    }
    return createdCode
  }

  function ChengeParams(data) {
    let result = JSON.parse(JSON.stringify(List))
    result[whichEdit].parameter[0] = data
    setList(result)
  }

  /* Delete Element from List and Positions */
  function deleteELementList(id) {
    setList(List.filter((element) => element.id !== id))
    positions.value = addPositionValue(positions.value, "delete", id)
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
          whichName={5}
          element={
            <EditParams
              ChengeParams={ChengeParams}
              setEditParams={setEditParams}
              parameter={List[whichEdit] ? List[whichEdit].parameter : ""}
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
