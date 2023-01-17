import { useState, useEffect } from "react"
import { View, Animated } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import AsyncStorage from "@react-native-async-storage/async-storage" // Save/read Data

export default function () {
  const [checkboxState, setCheckboxState] = useState(undefined)
  const [animation, setAnimation] = useState(new Animated.Value(1))

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      let theme = await AsyncStorage.getItem("@Theme")
      theme = JSON.parse(theme)
      setCheckboxState(theme ? true : false)
      setAnimation(new Animated.Value(theme ? 0 : 1))
    } catch (e) {
      console.error(e)
    }
  }

  const storeData = async () => {
    try {
      await AsyncStorage.setItem("@Theme", JSON.stringify(!checkboxState))
    } catch (e) {
      console.error(e)
    }
  }

  const startAnimate = () => {
    if (checkboxState) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }).start()
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start()
    }
    storeData()
  }

  const bgStyle = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(51,51,102)", "rgb(255,255,255)"]
  })

  const textStyle = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255,255,255)", "rgb(0,0,0)"]
  })

  if (checkboxState === undefined) {
    return (
      <Animated.View
        style={{
          flex: 1,
          gap: 15,
          backgroundColor: bgStyle
        }}
      ></Animated.View>
    )
  }

  return (
    <Animated.View
      style={{
        flex: 1,
        gap: 15,
        backgroundColor: bgStyle
      }}
    >
      <View
        style={{
          marginTop: 20,
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 15,
          flexDirection: "row"
        }}
      >
        <Animated.Text
          style={{
            fontFamily: "calibri-bold",
            textAlign: "left",
            fontSize: 19,
            color: textStyle
          }}
        >
          Turn black theme
        </Animated.Text>
        <BouncyCheckbox
          size={28}
          isChecked={checkboxState}
          disableBuiltInState
          onPress={() => {
            setCheckboxState(!checkboxState)
            startAnimate(1)
          }}
          iconStyle={{ borderColor: "#eb4464" }}
          innerIconStyle={{ borderWidth: 2 }}
          fillColor="#eb4464"
        />
      </View>
      <Animated.Text
        style={{
          fontFamily: "calibri-bold",
          textAlign: "left",
          fontSize: 12,
          color: textStyle,
          paddingHorizontal: 15,
          marginTop: 5
        }}
      >
        Theme in others Screens will change after reload the app
      </Animated.Text>
    </Animated.View>
  )
}
