import React, { useState, useEffect } from "react"
import { Modal, View, ToastAndroid, ActivityIndicator } from "react-native" // Modal for add block screen
import BtnPlus from "./Editor_Components/FloatAction" // btns:start, plus...
import RenderItem from "./Editor_Components/RenderItem" // render of elements
import { ListOfElements } from "./Lists/ListOfElements" // List of all Elemets
import { useSharedValue } from "react-native-reanimated" // Value Controler for Position
import AsyncStorage from "@react-native-async-storage/async-storage" // save / read data
import {
  StringB,
  addPositionValue,
  createListPosition
} from "./Editor_Components/FunctionForEditor" // function that have return
import AddBlock from "./Editor_Components/AddBlock" // Element AddBlock
import EditParams from "./Editor_Components/EditParams"
import CodeforModals from "./Editor_Components/Secondary_Edition_Component/CodeforModals"

export default function Editor({ navigation, route }) {
  const [List, setList] = useState([])
  const positions = useSharedValue({})
  const scrollY = useSharedValue(0)
  const [whichBtn, setWhichBtn] = useState(0)
  const [whichEdit, setWhichEdit] = useState(0)
  const [editParams, setEditParams] = useState(false)
  const [addBlockVisible, setAddBlockVisible] = useState(false)
  const [newElement, setNewElement] = useState(-1)
  const [copyElement, setCopyElement] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  let { idOfProject } = route.params

  /* save data  */
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem(idOfProject, value)
    } catch (e) {
      console.error(e)
    }
  }

  /* read data */
  useEffect(() => {
    getData()
  }, [])
  /* function for read data */
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(idOfProject)
      setList(jsonValue ? JSON.parse(jsonValue) : [])
      setIsLoading(false)
    } catch (e) {
      console.error(e)
    }
  }

  if (Object.keys(positions.value).length == 0) {
    // if Possition array is empty, we add new parameters
    positions.value = createListPosition(List)
  }

  /* add to List new Element */
  function addBlock(element) {
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
    let params = ListOfElements[element].secondArgument
    if (
      /* add second params */
      params &&
      params.length > 0
    ) {
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

  /* paste block (it work like addBlock but for enother parameters) */
  function pasteBlock(element, position) {
    let key = Math.random().toString(32).slice(2)
    let newListOfPositions = JSON.parse(JSON.stringify(positions.value))
    newListOfPositions.splice(position + 1, 0, key)
    let newElementInList = [
      {
        id: key,
        idOfELement: element.idOfELement,
        parameter: element.parameter,
        text: element.text
      }
    ] // crete new Element

    let params = ListOfElements[element.idOfELement].secondArgument
    if (
      /* add second params */
      params &&
      params.length > 0
    ) {
      newElementInList[0].adderParams = []
      params.forEach((a, index) => {
        let adderKey = key + "adderParams" + index
        newElementInList.push({
          id: adderKey,
          idOfELement: "A",
          code: a.code,
          color: ListOfElements[element.idOfELement].color,
          text: a.text
        })
        newElementInList[0].adderParams.push(adderKey)
        newListOfPositions.splice(position + 2 + index, 0, adderKey)
      })
    }

    positions.value = newListOfPositions
    setList([...List, ...newElementInList])
  }

  /* Start View scene */
  function codeCreator() {
    let c = []
    let a = 0
    positions.value.forEach((i) => {
      a = List.find(({ id }) => id === i)
      c.push(a)
    }) // create list with rigth positions
    let fisrtStrCode = ""

    if (List.lenth > 0 && List[0].listOfData) {
      if (List[0].listOfData != c[0].listOfData) {
        c[0].listOfData = List[0].listOfData
        c[0].listOfFunct = List[0].listOfFunct
      } // create data

      if (List[0].listOfData.length > 0) {
        fisrtStrCode = List[0].listOfData.reduce((a, b, index) => {
          if (index === List[0].listOfData.length - 1) {
            return a + b
          }
          return a + b + ","
        }, "let ")
      } // create data in html code
    }
    storeData(JSON.stringify(c))
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

  /* Change the paramters of Element */
  function ChengeParams(data, newData, newText, newFunct) {
    let result = JSON.parse(JSON.stringify(List))
    result[whichEdit].parameter = data
    result[whichEdit].text = newText
    result[0].listOfData = newData
    result[0].listOfFunct = newFunct
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
        result[1].listOfFunct = List[0].listOfFunct
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

  /* give data for editParameter scene */
  function findData() {
    if (List.length <= 0) return []
    if (!List[0].listOfData) return []
    return List[0].listOfData
  }

  /* give list of custom Function for editParameter scene */
  function findFunction() {
    if (List.length <= 0) return []
    if (!List[0].listOfFunct) return []
    return List[0].listOfFunct
  }

  /* Loading Of elements */
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#eb4464" />
      </View>
    )
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
        copyElement={copyElement}
        setCopyElement={setCopyElement}
        pasteBlock={pasteBlock}
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
              listOfFunct={findFunction()}
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
