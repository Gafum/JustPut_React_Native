import React, { useState } from "react"
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
