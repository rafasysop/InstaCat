import React, { useState } from "react";
import {View, Image, Text, TouchableOpacity,  StyleSheet} from "react-native";

const Photo = ({ file}) => {

  const [countLike, setLike] = useState(0);

  const increment = () => {
      setLike(countLike + 1);
  }

  return(

   <View style={styles.container}>
      
      <Image style={styles.photo} source={file} />
      <Text style={styles.text}>{countLike}</Text>
      <TouchableOpacity onPress={increment}>
        <Text>Like</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign:'center',
    },
  text: {
    fontSize: 22,
    //color: '#00ff00',

  },
   photo: {
     width: 180,
     height: 180

  }


});

export default Photo;
