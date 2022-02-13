import { StyleSheet,Image,TouchableOpacity,View } from 'react-native'
import React from 'react'

export default function Footer() {
  return (

    <View style={styles.mainViewStyle}>
          <View style={styles.footer}>
          <TouchableOpacity style={styles.bottomButtons}>
          <Image style={styles.icons}  source={require('../../icons/home.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButtons}>
            <Image style={styles.icons}  source={require('../../icons/analytics.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButtons}>
          <Image style={styles.icons}  source={require('../../icons/settings.png')}/>
          </TouchableOpacity>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  mainViewStyle: {
  flex: 1,
  flexDirection: 'column',
},
footer: {
  position: 'absolute',
  flex:0.1,
  left: 0,
  right: 0,
  bottom: -10,
  backgroundColor:'#fff',
  flexDirection:'row',
  height:80,
  alignItems:'center',
},
bottomButtons: {
  alignItems:'center',
  justifyContent: 'center',
  flex:1,
},
})