import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, useDerivedValue, interpolateColor, withTiming, withRepeat, withSequence } from 'react-native-reanimated'
import React from 'react';
import { useState } from "react";

export default function Pixel() {

    const [pixelBackground, setPixelBackground] = useState(false);

    const animation = useSharedValue(0)

    const animationColor = useDerivedValue(() => {
      return interpolateColor(animation.value,
        [0, 1, 2, 3, 4, 5, 6, 7, 8],
        ['white', 'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 'white']
        /* ['255,255,255', '173,100,253', '111,0,284', '1,101,282', '102,155,0', '255,263,1', '255,119,52', '201,0,13', '255,255,255'] */
      )
    })

    const colorDuration = 500

    const togglePixelOn = () => {
      setPixelBackground(true)
      startAnimation()
    }
  
    const startAnimation = () => {
      animation.value = 
        withRepeat(withSequence(
        withTiming(0,{duration:colorDuration}),
        withTiming(1,{duration:colorDuration}),
        withTiming(2,{duration:colorDuration}),
        withTiming(3,{duration:colorDuration}),
        withTiming(4,{duration:colorDuration}),
        withTiming(5,{duration:colorDuration}),
        withTiming(6,{duration:colorDuration}),
        withTiming(7,{duration:colorDuration}),
        withTiming(8,{duration:colorDuration})),
        -1,
        false
        )}

    /* const backgroundColorWithOpacity = 'rgb(' + animationColor.value + ',' + pixelDarkness + ')'; */

    const animationStyle = useAnimatedStyle(() => {
      return{
        height: 20,
        aspectRatio: 1,
        borderColor: 'rgb(54, 54, 54)',
        borderWidth: 0.5,
        backgroundColor: pixelBackground ? animationColor.value : 'transparent'
      }
    })

    return (
    <TouchableWithoutFeedback
        onPressIn={togglePixelOn}>
        <Animated.View style={[animationStyle]} />
    </TouchableWithoutFeedback>
    );
}

/* const styles = StyleSheet.create({
    pixel: {
        
    }
}) */