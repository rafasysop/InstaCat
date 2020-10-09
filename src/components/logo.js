import React from "react";
import {Text, StyleSheet} from "react-native";

const Logo = () =>{
  return(
    <Text style={styles.logo}>InstaCat</Text>

  );
}

const styles = StyleSheet.create({
   logo: {
    fontSize: 22,
    marginVertical: 20,
    alignSelf: 'center',

    //color: '#00ff00',

  }
});

export default Logo;