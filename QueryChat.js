import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./styles";


export default class Query extends Component {
    constructor(props){
      super(props);
      this.state = {
          relations: [
              { isSelected: false, key: 1 },
              { isSelected: false, key: 2 }
            ],
            data: [
                { key:'1', questions: "We have few queries before1"},
                { key:'2', questions: "We have few queries before2" },
                { key:'3', questions: "We have few queries before3"},
              ],
      };
    }
render(){
    return(
        <View> 
        <TouchableOpacity  style={styles.middleButtonContainer} >
            <Text style={styles.middlebuttonText}>YES</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.middleButtonContainer} >
            <Text style={styles.middlebuttonText}>NO</Text>
          </TouchableOpacity>
          </View>
    );
}
}