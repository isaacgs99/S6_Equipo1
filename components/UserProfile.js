import React, {useState} from 'react';
import { StyleSheet, View, Image, TextInput, Button, FlatList } from 'react-native';
import {Feed} from './Feed';

export const UserProfile = (props) => {
  const data = props.data; 

  const [text, onChangeText] = React.useState("");
  
  const [isFocus, setIsFocus] = useState(false);

  const [dataFeed, setDataFeed] = useState(props.dataFeed);

  const onFocus = () =>{
    setIsFocus(!isFocus)
  }

  function updateFeed() {
    const object = {
      "_id": dataFeed.length + 1,
      ...data,
      "description": text.replace(/<|>|&|\/|'|"/g, ''),
      "like": true,
    };

    const newFeed = [...dataFeed, object];
    newFeed.sort((a,b) => b._id - a._id);

    setDataFeed(newFeed);
  }
  
  return(
    <>
    <View style={styles.container}>
      <Image 
        source={{ uri: data.image }}
        style={styles.imageIcon}
      />
      <TextInput 
        style={styles.textInput}
        placeholder="What's your dog doing?"
        clearTextOnFocus={true}
        multiline
        numberOfLines={2}
        maxLength={80}
        textBreakStrategy='balanced'
        onChangeText={onChangeText}
        value={text}
        onFocus={() => onFocus()}
      />
    </View>
    <View style={styles.button}>
      { isFocus ? <Button title="Post" onPress={updateFeed} />  
                : null }
    </View>
    <FlatList 
      data = {dataFeed}
      keyExtractor={ (item) => String(item['_id']) }
      renderItem = { ({item}) =>(
        <Feed data={item}/>
      )}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  textInput:{
    fontFamily: 'sans-serif-light',
    fontSize: 15,
    width: 330,
    color: 'black', 
  },
  imageIcon:{
    marginLeft: 5,
    marginRight: 5,
    width: 30, 
    height:30,
    borderRadius: 40,
  },
  button: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  }
});