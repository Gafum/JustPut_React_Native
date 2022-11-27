import React, { useState } from "react"
import { ToastAndroid } from "react-native"
import Dialog from "react-native-dialog"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Colors = ["#96b38e", "#f59073", "#913e5f", "#eb4464"]

export default function CreateProject({
  visible,
  setVisible,
  listOfProjects,
  setListOfProjects
}) {
  const [nameOfProject, setNameOfProjectfirst] = useState("")

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@List_Projects", value)
    } catch (e) {
      console.error(e)
    }
  }

  function handleCancel() {
    setVisible(false)
    setNameOfProjectfirst("")
  }

  function pressOk() {
    let realName = nameOfProject.split(" ").join("")
    if (realName.length == 0) return
    if (
      listOfProjects &&
      listOfProjects.findIndex((element) => element.name == realName) + 1
    ) {
      ToastAndroid.showWithGravityAndOffset(
        "Project name already exists",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        27
      )
      return
    }

    let newListOfPr = [
      ...listOfProjects,
      {
        name: realName,
        color: Colors[Math.floor(Math.random() * Colors.length)],
        id: "@" + Math.random().toString(32).slice(2)
      }
    ]

    storeData(JSON.stringify(newListOfPr))
    setListOfProjects(newListOfPr)
    handleCancel()
  }

  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>Create Project</Dialog.Title>
      <Dialog.Input
        placeholder="name"
        onChangeText={setNameOfProjectfirst}
        value={nameOfProject}
      ></Dialog.Input>
      <Dialog.Button label="Cancel" onPress={handleCancel} />
      <Dialog.Button label="Ok" onPress={pressOk} />
    </Dialog.Container>
  )
}
