import React from "react"
import Dialog from "react-native-dialog"
import AsyncStorage from "@react-native-async-storage/async-storage" // Save/read Data

export default function GeneralSettings({
  visible,
  setVisible,
  setTheme,
  theme
}) {
  const toggleSwitch = () => setTheme((previousState) => !previousState)

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("@Theme", JSON.stringify(theme))
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Dialog.Container
      visible={visible}
      onBackdropPress={() => setVisible(false)}
    >
      <Dialog.Title
        style={{
          color: "black",
          fontFamily: "calibri-bold",
          textAlign: "center"
        }}
      >
        General Settings
      </Dialog.Title>
      <Dialog.Description
        style={{ color: "black", fontFamily: "calibri-regular" }}
      >
        Changes will be saved after clicking the OK button!!!
      </Dialog.Description>
      <Dialog.Switch
        label="Black theme"
        trackColor={{ false: "#777", true: "black" }}
        thumbColor={theme ? "#3db05a" : "#f2f3f2"}
        ios_backgroundColor="#777"
        onValueChange={toggleSwitch}
        value={theme}
      />
      <Dialog.Button
        style={{
          color: "#3db05a",
          fontFamily: "calibri-bold",
          fontSize: 17
        }}
        label="Ok"
        onPress={() => {
          storeData()
          setVisible(false)
        }}
      />
    </Dialog.Container>
  )
}
