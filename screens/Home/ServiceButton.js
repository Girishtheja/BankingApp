import { StyleSheet, Text, View,TouchableOpacity,ActivityIndicator,Image } from 'react-native'
import React,{ useState } from 'react'

export default function ServiceButton() {
  const [isLoading, setIsLoading] = useState(false);
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };
  return (
      <>
       <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={toggleLoading}>
          
          <Image style={styles.icons}  source={require('../../icons/dollar.png')}/>
          <View>
            <Text style={styles.title}>Money{'\n'}transfers</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleLoading}>
          <Image style={styles.icons} source={require('../../icons/percent.png')}/>
          <View>
            <Text style={styles.title}>Open{'\n'}deposit</Text> 
          </View>
        </TouchableOpacity>
        </View>
      {isLoading && <ActivityIndicator size="large" color="yellow" />}
      </>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: ' #282828',
    alignItems: 'baseline',
    justifyContent:'space-between',
    // padding:10,
  },
  button: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 15,
    marginLeft:10,
    backgroundColor:'#282828',
  },
  title:{
      color:'#DCDCDC',
      paddingRight:60,
  },
  icons:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        width:50,
        height:50,
        marginBottom:10,
  }
})