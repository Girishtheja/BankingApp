import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>My cards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        color:'#fff',
        fontWeight:'500',
        fontSize:20,
        padding:10,
    }
})