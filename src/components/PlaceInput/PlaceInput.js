import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View, TextInput,Button,TouchableOpacity} from 'react-native';

export default class PlaceInput extends Component {

    state={
        placeName: '',
      }
    
      placeNameChangeHandler = (val) =>
      {
          this.setState({placeName:val});
      
      }
      placeSubmitHandler = ()=> {
         if(this.state.placeName.trim = "")
         {
           return;
         }
        alert("hii");
        this.props.onPlaceAdded(this.state.placeName);
     }


    render() {
        return(
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.placeInput}
            placeholder = "An Awesome place"
            value={this.state.placeName} onChangeInput
            onChangeText={this.placeNameChangeHandler}
          />

          
            <TouchableOpacity style={styles.placeButton}>
                   
            </TouchableOpacity>
        </View>
        );

    }


}

const styles = StyleSheet.create({

    inputContainer: {
        width:"100%",
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
      },
    
    placeInput:{
          width:"70%"
      },
    placeButton:{
        width:"30%"
      }


});