
import React from 'react';
import Header from './screens/Home/Header';
import ListCard from './screens/Home/ListCard';
import Services from './screens/Home/Services';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App= () => {
  return (

    <View style={styles.container}>
    <Header/>
    <ListCard/>
    <Services/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000',
  }
  
});

export default App;
