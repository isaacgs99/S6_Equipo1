import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const Header = () => {
  return(
    <View style={styles.container}>
      <View style={styles.search}>
        <MaterialIcons name="messenger-outline" size={20} color="rgb(110,110,110)" />
      </View>
      <View style={styles.search}>
        <Feather name="search" size={20} color="rgb(110,110,110)" />
      </View>
      <Image 
        source={require('../assets/icon_dog.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Dogstagram</Text>    
    </View>
  );
}
  
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 25,
      backgroundColor: 'rgb(17,82,178)',
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
    },
    text:{
      fontFamily: 'sans-serif-light',
      fontSize: 30,
      color: 'white' 
    },
    image:{
      marginLeft: 16,
      marginRight: 16,
      width: 50, 
      height:50
    },
    search: {
      padding:5,
      backgroundColor: 'white',
      borderRadius: 40,
    },
    message:{
      marginRight: 10,
    }
  });