

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';


export default class App extends Component {

  state={
    places:[]
  }

  placeAddedHandler = (placeName)=>{
    
      this.setState(prevState =>{
        return{
          places: prevState.places.concat(placeName)
        };
      });
  };

  render() {
    const placesOutput = this.state.places.map((place,i) =>
    <ListItem key={i} placeName={place}/>
    );
    return (
      <View style={styles.container}>
        
        <View>
          <PlaceInput onPlaceAdded = {this.placeAddedHandler}/>
        </View>
        <View style={styles.listContainer}>
          {placesOutput}
        </View>
       
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
