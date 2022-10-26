import React, { useState } from "react"
import {
  useWindowDimensions,
  TouchableOpacity,
  Image,
  Alert
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
  withTiming
} from "react-native-reanimated"
import {
  PanGestureHandler,
  GestureHandlerRootView
} from "react-native-gesture-handler"
import { BlurView } from "expo-blur"
import { ListOfElements } from "../Lists/ListOfElements" //list of all elements
import { Element } from "./Element" //render of element

const ELEMENT_HEIGHT = 80

function clamp(value, lowerBound, upperBound) {
  "worklet"
  return Math.max(lowerBound, Math.min(value, upperBound))
}

function objectMove(object, from, to) {
  "worklet"
  const newObject = Object.assign({}, object)

  for (const id in object) {
    if (object[id] === from) {
      newObject[id] = to
    }

    if (object[id] === to) {
      newObject[id] = from
    }
  }

  return newObject
}

function listToObject(list) {
  const values = Object.values(list)
  const object = {}

  for (let i = 0; i < values.length; i++) {
    object[values[i].id] = i
  }
  return object
}

const SCROLL_HEIGHT_THRESHOLD = ELEMENT_HEIGHT

function MovableElement({
  id,
  title,
  positions,
  scrollY,
  Count,
  colorText,
  chenger,
  deleteELementList
}) {
  const dimensions = useWindowDimensions()
  const insets = useSafeAreaInsets()
  const [moving, setMoving] = useState(false)
  const top = useSharedValue(positions.value[id] * ELEMENT_HEIGHT)

  useAnimatedReaction(
    () => positions.value[id],
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
        scrollY.value = withTiming(0, { duration: 1500 })
      } else if (
        positionY >=
        scrollY.value + dimensions.height - SCROLL_HEIGHT_THRESHOLD
      ) {
        // Scroll down
        const contentHeight = Count * ELEMENT_HEIGHT
        const containerHeight = dimensions.height - insets.top - insets.bottom
        const maxScroll = contentHeight - containerHeight
        scrollY.value = withTiming(maxScroll, { duration: 1500 })
      } else {
        cancelAnimation(scrollY)
      }

      top.value = withTiming(positionY - ELEMENT_HEIGHT, {
        duration: 16
      })

      const newPosition = clamp(
        Math.floor(positionY / ELEMENT_HEIGHT),
        0,
        Count - 1
      )

      if (newPosition !== positions.value[id]) {
        positions.value = objectMove(
          positions.value,
          positions.value[id],
          newPosition
        )
      }
    },
    onFinish() {
      top.value = positions.value[id] * ELEMENT_HEIGHT
      runOnJS(setMoving)(false)
    }
  })

  chenger()

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

  return (
    <Animated.View style={animatedStyle}>
      <BlurView intensity={moving ? 100 : 0} tint="light">
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={{
              maxWidth: "60%",
              position: "relative"
            }}
          >
            <Element title={title} colorText={colorText} />
            <TouchableOpacity
              style={{
                position: "absolute",
                right: -120,
                top: ELEMENT_HEIGHT / 2,
                transform: [{ translateY: -15 }]
              }}
              onLongPress={() => {
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
                  width: 30,
                  height: 30
                }}
                source={require("../../assets/delete.png")}
              />
            </TouchableOpacity>
          </Animated.View>
        </PanGestureHandler>
      </BlurView>
    </Animated.View>
  )
}

///////////////RENDER/////////////////

export default function RenderItem({
  list,
  chenger,
  positions,
  deleteELementList
}) {
  const scrollY = useSharedValue(0)
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
          scrollEventThrottle={16}
          style={{
            flex: 1,
            position: "relative",
            backgroundColor: "white"
          }}
          contentContainerStyle={{
            height: list.length * ELEMENT_HEIGHT
          }}
        >
          {list.map((i) => {
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
                chenger={chenger}
                deleteELementList={deleteELementList}
              />
            )
          })}
        </Animated.ScrollView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
