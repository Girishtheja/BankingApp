import React from 'react';
import { Image, View, FlatList, StyleSheet, Text, Dimensions } from 'react-native';
const w =Dimensions.get("window").width
const data = [
  {
   
   Balance :'Balance',
   balance :'$ 15,260',
  },
  {
   Balance :'Balance',
   balance :'$ 3,260',

  },
  {
   Balance :'Balance',
   balance :'$ 20,260',
  },
];
export default function ListCard() {
    const renderItem =({item}) =>{
        return(
            <View style={styles.cardContainer}>
            {/* <Image style={styles.masterImg} source={(require('../../icons/mastercard.png'))}/> */}
                
                <View>
                    <Image style={styles.icon}  resizeMode="contain" source={require('../../icons/visa.png')}/>
                </View>
                <View>
                <Text style={styles.Balance}>{item.Balance}</Text>
                <Text style={styles.balance}>{item.balance}</Text>
                </View>
            </View>

        )
    }
    return (
    <View style = {styles.container}>
        <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false}
        data={data} 
        renderItem={renderItem}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{ },
    cardContainer:{
        backgroundColor:'#1C6B47',
        width: w-135,
        height:175 ,
        marginHorizontal:5,
        borderRadius:10,
        marginRight:5,
    },
    masterImg:{
        resizeMode:'contain',
        position:'absolute',
        width:40,
        height:30,
        
    },
    Balance:{
     marginLeft:20,   
     marginTop:65,   
     color:'gray',
     fontSize:15,
    },
    balance:{
        marginLeft:20,
        color:'#fff',
        fontSize:30,
        fontWeight:'600',
    },
    icon:{
        marginTop:5,
        marginLeft:20,
        width:40,
        height:30,

    },
})