import { useState } from "react"
import { TouchableOpacity, Text, Alert, Image } from "react-native"
import Dialog from "react-native-dialog"

function InputInDialog /*Change project name*/({ myName, setMyName }) {
  const [value, setValue] = useState(myName)
  return (
    <Dialog.Input
      onChangeText={(i) => {
        setValue(i)
        setMyName(i)
      }}
      value={value}
    />
  )
}

export default function SettingOfProject({
  visible,
  setVisible,
  listOfProjects,
  setListOfProjects,
  storeData,
  removeItemValue,
  saveFile
}) {
  const [myName, setMyName] = useState(visible.name)
  let projectName = visible.name
  function pressOk() {
    if (myName && myName !== projectName && myName.length > 0) {
      const realName = myName.split(" ").join("")
      if (realName.length > 0) {
        let newListOfPr = JSON.parse(JSON.stringify(listOfProjects))
        newListOfPr[listOfProjects.indexOf(visible)].name = realName
        setListOfProjects(newListOfPr)
        setMyName(undefined)
        storeData(JSON.stringify(newListOfPr))
      }
    }
    setVisible(false)
  }

  return (
    <Dialog.Container
      visible={visible ? true : false}
      onBackdropPress={() => setVisible(false)}
    >
      <Dialog.Title /* Setting myName */
        style={{
          color: "black",
          fontFamily: "calibri-bold",
          textAlign: "center"
        }}
      >
        Setting {projectName}
      </Dialog.Title>

      <InputInDialog myName={projectName} setMyName={setMyName} />

      <TouchableOpacity /* JustPut file */
        onPress={() => {
          saveFile({
            idOfProject: visible.id,
            myName: visible.name,
            myType: "justput"
          })
        }}
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#f59073",
          paddingVertical: 7,
          paddingHorizontal: 10,
          borderRadius: 5,
          marginBottom: 13
        }}
      >
        <Text
          style={{
            color: "#000",
            fontFamily: "calibri-bold",
            textAlign: "center",
            fontSize: 17
          }}
        >
          Create justput file
        </Text>
        <Image
          style={{
            height: 25,
            width: 25
          }}
          source={require("../../assets/save.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity /* html file */
        onPress={() => {
          saveFile({
            idOfProject: visible.id,
            myName: visible.name,
            myType: "html"
          })
        }}
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#96b38e",
          paddingVertical: 7,
          paddingHorizontal: 10,
          borderRadius: 5,
          marginBottom: 13
        }}
      >
        <Text
          style={{
            color: "#000",
            fontFamily: "calibri-bold",
            textAlign: "center",
            fontSize: 17
          }}
        >
          Create html file
        </Text>
        <Image
          style={{
            height: 25,
            width: 25
          }}
          source={require("../../assets/createCode.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity /* Delete */
        onPress={() => {
          Alert.alert(
            "Delete!!!",
            visible.name,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              {
                text: "OK",
                onPress: () => {
                  removeItemValue(visible.id)
                  setVisible(false)
                }
              }
            ],
            {
              cancelable: true
            }
          )
        }}
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#eb4464",
          paddingVertical: 7,
          paddingHorizontal: 10,
          borderRadius: 5
        }}
      >
        <Text
          style={{
            color: "#000",
            fontFamily: "calibri-bold",
            textAlign: "center",
            fontSize: 17
          }}
        >
          Delete {projectName}
        </Text>
        <Image
          style={{
            height: 30,
            width: 30
          }}
          source={require("../../assets/delete.png")}
        />
      </TouchableOpacity>

      <Dialog.Button
        style={{ color: "#eb4464", fontFamily: "calibri-bold" }}
        label="Cancel"
        onPress={() => setVisible(false)}
      />
      <Dialog.Button
        style={{
          color: "#3db05a",
          fontFamily: "calibri-bold",
          fontSize: 17
        }}
        label="Ok"
        onPress={pressOk}
      />
    </Dialog.Container>
  )
}
