import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import ServiceButton from './ServiceButton'
import History from './History'
import Footer from './Footer'
export default function Services() {
  return (
    <>
  
    <View style={styles.container}>
    <Text style={styles.title}>Services</Text>
    <Text style={styles.more} >{`More>`}</Text>
    </View>

    <ServiceButton/>
    
    <History/>
    
     <Footer/>
    </>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    alignItems:'flex-start',
    flexDirection:'row',
    justifyContent:'space-between',
  },  
  title:{
        color:'#fff',
        fontWeight:'500',
        fontSize:20,
        padding:10,
    },
    more:{
        color:'gray',
        // fontWeight:'400',
        fontSize:15,
        padding:15,
    },
  
    icons:{
      resizeMode:'contain',
      width:40,
      height:40,

    },
    child:{
      borderRadius:'50%',
      backgroundColor:'#fff',
      width:60,


    },
})