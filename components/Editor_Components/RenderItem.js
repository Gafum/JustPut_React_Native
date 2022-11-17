import React, { useState } from "react"
import {
  useWindowDimensions,
  TouchableOpacity,
  Image,
  Alert,
  View
} from "react-native"
import {
  SafeAreaProvider,
  useSafeAreaInsets
} from "react-native-safe-area-context"
import Animated, {
  cancelAnimation,
  runOnJS,
  scrollTo,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  Easing
} from "react-native-reanimated"
import {
  PanGestureHandler,
  GestureHandlerRootView
} from "react-native-gesture-handler"
import { BlurView } from "expo-blur"
import { ListOfElements } from "../Lists/ListOfElements" //list of all elements
import { Element } from "./Secondary_Edition_Component/Element" //render of element

const ELEMENT_HEIGHT = 80

function clamp(value, lowerBound, upperBound) {
  "worklet"
  return Math.max(lowerBound, Math.min(value, upperBound))
}

function objectMove(object, from, to) {
  "worklet"
  const result = JSON.parse(JSON.stringify(object))
  const newElemement = result[to]
  result[to] = result[from]
  result[from] = newElemement
  return result
}

const SCROLL_HEIGHT_THRESHOLD = ELEMENT_HEIGHT

function MovableElement({
  id,
  title,
  positions,
  scrollY,
  Count,
  colorText,
  deleteELementList,
  setEditParams,
  setWhichEdit,
  newElement,
  setNewElement
}) {
  const dimensions = useWindowDimensions()
  const insets = useSafeAreaInsets()
  const [moving, setMoving] = useState(false)
  const top = useSharedValue(positions.value.indexOf(id) * ELEMENT_HEIGHT)
  const [showDeteils, setShowDeteils] = useState(false)

  useAnimatedReaction(
    () => positions.value.indexOf(id),
    (currentPosition, previousPosition) => {
      if (currentPosition !== previousPosition) {
        if (!moving) {
          top.value = withSpring(currentPosition * ELEMENT_HEIGHT)
        }
      }
    },
    [moving]
  )

  const gestureHandler = useAnimatedGestureHandler({
    onStart() {
      runOnJS(setMoving)(true)
    },
    onActive(event) {
      const positionY = event.absoluteY + scrollY.value

      if (positionY <= scrollY.value + SCROLL_HEIGHT_THRESHOLD) {
        // Scroll up
        scrollY.value = withTiming(0, {
          duration: 400,
          easing: Easing.linear
        })
      } else if (
        positionY >=
        scrollY.value + dimensions.height - SCROLL_HEIGHT_THRESHOLD + 60
      ) {
        // Scroll down
        const contentHeight = Count * ELEMENT_HEIGHT
        const containerHeight = dimensions.height - insets.top - insets.bottom
        const maxScroll = contentHeight - containerHeight
        scrollY.value = withTiming(maxScroll + 120, {
          duration: 400,
          easing: Easing.linear
        })
      } else {
        cancelAnimation(scrollY)
      }

      top.value = withTiming(positionY - ELEMENT_HEIGHT, {
        duration: 16,
        easing: Easing.linear
      })

      const newPosition = clamp(
        Math.floor(positionY / ELEMENT_HEIGHT),
        0,
        Count - 1
      )

      if (newPosition !== positions.value.indexOf(id)) {
        positions.value = objectMove(
          positions.value,
          positions.value.indexOf(id),
          newPosition
        )
      }
    },
    onFinish() {
      top.value = positions.value.indexOf(id) * ELEMENT_HEIGHT
      runOnJS(setMoving)(false)
    }
  })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      left: 0,
      right: 0,
      top: top.value,
      zIndex: moving ? 1 : 0,
      shadowColor: "black",
      shadowOpacity: withSpring(moving ? 0.2 : 0),
      shadowRadius: 10
    }
  }, [moving])

  function Details({ show }) {
    //Btns Delete, Copy
    function Buttons() {
      return (
        <TouchableOpacity /*Delete*/
          onPress={() => {
            Alert.alert(
              "Delete!!!",
              title,
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "OK", onPress: () => deleteELementList(id) }
              ],
              { cancelable: true }
            )
          }}
        >
          <Image
            style={{
              width: 25,
              height: 25
            }}
            source={require("../../assets/delete.png")}
          />
        </TouchableOpacity>
      )
    }
    return show ? <Buttons /> : ""
  }

  return (
    <Animated.View style={animatedStyle}>
      <BlurView
        intensity={moving ? 5 : 0}
        tint="dark"
        style={{
          flex: 1,
          marginRight: 10
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
          onPressIn={() => (newElement == id ? setNewElement(-1) : "")}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              minWidth: "70%",
              backgroundColor: newElement == id ? colorText : "white",
              borderBottomRightRadius: 24,
              borderTopRightRadius: 24
            }}
          >
            <PanGestureHandler
              /* Chenge Position */ onGestureEvent={gestureHandler}
            >
              <Animated.View
                style={{
                  minWidth: "5%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity onPress={() => setShowDeteils(!showDeteils)}>
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 10
                    }}
                    source={require("../../assets/menu.png")}
                  />
                </TouchableOpacity>
              </Animated.View>
            </PanGestureHandler>
            <Details show={showDeteils} />
            <Element
              title={title}
              colorText={newElement == id ? "black" : colorText}
            />
          </View>
          <View>
            <TouchableOpacity
              /*Edit*/ onPress={() => {
                setEditParams(true)
                setWhichEdit()
              }}
            >
              <Image
                style={{
                  width: 30,
                  height: 30
                }}
                source={require("../../assets/editBtn.png")}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </BlurView>
    </Animated.View>
  )
}

///////////////RENDER/////////////////

export default function RenderItem({
  list,
  positions,
  deleteELementList,
  scrollY,
  setEditParams,
  setWhichEdit,
  newElement,
  setNewElement
}) {
  const scrollViewRef = useAnimatedRef()

  useAnimatedReaction(
    () => scrollY.value,
    (scrolling) => scrollTo(scrollViewRef, 0, scrolling, false)
  )

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y
  })

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <Animated.ScrollView
          ref={scrollViewRef}
          onScroll={handleScroll}
          scrollEventThrottle={30}
          style={{
            flex: 1,
            position: "relative",
            backgroundColor: "white"
          }}
          contentContainerStyle={{
            height: list.length * ELEMENT_HEIGHT + 60
          }}
        >
          {list.map((i, index) => {
            let element = ListOfElements[i.idOfELement]
            return (
              <MovableElement
                key={i.id}
                id={i.id}
                title={element.text}
                positions={positions}
                scrollY={scrollY}
                Count={list.length}
                colorText={element.color}
                deleteELementList={deleteELementList}
                setEditParams={setEditParams}
                setWhichEdit={() => setWhichEdit(index)}
                newElement={newElement}
                setNewElement={setNewElement}
              />
            )
          })}
        </Animated.ScrollView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
