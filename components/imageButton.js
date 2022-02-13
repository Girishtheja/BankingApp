import { styleSheet,View, Text, Pressable } from 'react-native'
import React from 'react'

export default function imageButton({onPress}) {
  return (
    <Pressable onPress={onPress}>
      <image source={source} style={[styles.imgIcon],{tintColor: color ||'black}} />
    </Pressable>
  )
}
const styles = StyleSheet.create({
    imgIcon:{
        width:30,
        height:30,
    }
});