import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

export const Feed = (props) => {

  const [data, setData] = useState(props.data);

  const [like, setLike] = useState(props.data.like);

  const [color, setColor] = useState('rgb(110,110,110)');
    
  const _onPressButton = () => {
    data.like = ! data.like;
    setData(data);
    setLike(!like);
  };

  const _onPressShare = () => {
    const newColor = color === '#00ff00' ? 'rgb(110,110,110)' : '#00ff00';
    setColor(newColor);
  };
        
  return(
    <>  
      <View style={styles.headerContainer}>
        <Image 
          source={{ uri: data.image }}
          style={styles.imageIcon}
        />
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <Text style={styles.descriptionText}>{data.description}</Text>
      <View style={styles.imageReactionContainer}>
      <TouchableHighlight onPress={ _onPressButton } underlayColor="white">
        <View style={styles.iconContainer}>
          { like ? <Entypo name="baidu" size={20} color="rgb(110,110,110)" /> : <Entypo name="baidu" size={20} color="blue" />}
        </View>
      </TouchableHighlight>
        <TouchableHighlight style={styles.iconContainer} onPress={_onPressShare} underlayColor='white'>
          <Feather name="share-2" size={20} color={color} />
        </TouchableHighlight>
      </View>
    </>
  );
}
  
const styles = StyleSheet.create({
  headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 1,
  },
  text:{
    fontFamily: 'sans-serif-light',
    fontSize: 20,
    color: 'black' 
  },
  descriptionText:{
    margin: 8,
  },
  imageIcon:{
    marginTop: 5,
    marginLeft: 16,
    marginRight: 16,
    width: 30, 
    height:30,
    borderRadius: 40,
  },
  imageReactionContainer:{
    flexDirection:'row',
    borderBottomColor: 'rgb(110,110,110)',
    borderBottomWidth: 7,
  },
  iconContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10
  },
  imageReaction:{
      marginLeft: 16,
      width: 30, 
      height:30
  }
});
  