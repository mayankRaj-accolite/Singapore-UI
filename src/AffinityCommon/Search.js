

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,Button} from 'react-native';


export default class NewApp extends Component {

  render() {
    
    return (
      <View style={styles.container}>
        <Search></Search>
        <FlatList></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
  
  listContainer:{
    width:"100%"
  }

});
