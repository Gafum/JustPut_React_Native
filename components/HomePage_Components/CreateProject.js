import { useState } from "react"
import Dialog from "react-native-dialog"

export default function CreateProject({ visible, setVisible, addProjext }) {
  const [nameOfProject, setNameOfProjectfirst] = useState("")

  function handleCancel() {
    setVisible(false)
    setNameOfProjectfirst("")
  }

  function pressOk() {
    let realName = nameOfProject.split(" ").join("")
    if (realName.length == 0) return
    addProjext({ myName: realName, addOldProject: false })
    handleCancel()
  }

  return (
    <Dialog.Container visible={visible} onBackdropPress={handleCancel}>
      <Dialog.Title
        style={{
          color: "black",
          fontFamily: "calibri-bold",
          textAlign: "center"
        }}
      >
        Create Project
      </Dialog.Title>
      <Dialog.Input
        style={{ color: "black", fontFamily: "calibri-regular" }}
        placeholder="name"
        onChangeText={setNameOfProjectfirst}
        value={nameOfProject}
      />
      <Dialog.Button
        style={{ color: "#eb4464", fontFamily: "calibri-bold" }}
        label="Cancel"
        onPress={handleCancel}
      />
      <Dialog.Button
        style={{
          color: nameOfProject.length ? "#3db05a" : "#777",
          fontFamily: "calibri-bold"
        }}
        label="Ok"
        onPress={pressOk}
        disabled={!nameOfProject.length}
      />
    </Dialog.Container>
  )
}
