import { StyleSheet, Text, View ,Image,ScrollView } from 'react-native'
import React from 'react'

export default function History() {
  
    return (
    <View>
        <View styles={styles.HistoryBar}>
            <Text style={[{color:'white', fontWeight:'500',
            fontSize:20,marginTop:15,marginBottom:10,width:90,marginLeft:15}]}>History</Text>       
            {/* <Image style={styles.icon} source={require('../../icons/search.png')}/> */}
        </View>
      <ScrollView >
        <View style={styles.MainContainer}>
            <Text style={
                [{color:'#A9A9A9',
                fontWeight:'400',
                marginTop:20,
                marginLeft:15,
                }]}>Today</Text>
           
                <View style={styles.history}>
                    <Image style={styles.icons} source={require('../../icons/apple.png')}/>
                    <Text style={styles.titles}>Apple Store  {'\n'}
                    <Text style={{color:'#A9A9A9'}}>Visa</Text></Text>
                    <Text style={styles.corner}> -5,99$</Text>
                </View>
                
                <View style={styles.history}>
                <Image style={styles.icons} source={require('../../icons/spotify.png')}/>
                <Text style={styles.titles}>Spotify{'\n'} 
                <Text style={{color:'#A9A9A9'}}>Visa</Text></Text> 
                <Text style={styles.corner,{marginLeft:190,color:'black',marginTop:20,fontSize:20,fontWeight:'800'}}>-12,99$</Text>

                </View>
            
                <View style={styles.history}>
                <Image style={styles.icons} source={require('../../icons/local.png')}/>
                <Text style={styles.titles}>Local cafe    {'\n'} 
                <Text style={{color:'#A9A9A9'}}>Visa</Text> </Text>
                <Text style={styles.corner}> -2,99$</Text>
                
                </View>
                
                <View style={styles.history}>
                <Image style={styles.icons} source={require('../../icons/apple.png')}/>
                <Text style={styles.titles}>Apple Store {'\n'} 
                <Text style={{color:'#A9A9A9'}}>Visa</Text></Text>
                <Text style={styles.corner}> -3,99$</Text>
                </View>
            
            
         </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:'#fff',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,    
    },
    icons:{
        resizeMode:'contain',
        width:50,
        height:50,
        margin:10,
    },
    title:{
        color:'#fff',
    },
    titles:{
        marginTop:20,
        color:'black',
        fontWeight:'600',
    },
    history:{
    flexDirection:'row'
    },
    corner:{
        marginHorizontal:165,
        marginTop:0,
        color:'#000',
        fontWeight:'800',
        fontSize:20,

    },
    HistoryBar:{
      display:'flex',
      flexDirection:'row',
      alignItems:'flex-start',
      justifyContent:'space-between',
    },
})