import React, {Component} from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class NewApp extends Component {

  render() {
    
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Image
            source={require('./images/back_grey.png')}
          />
          
        </View>
       

        <View style={styles.abc}>
        <Text>
              Online Consultation
          </Text>
        
        </View>

        <View style = {styles.body}>
          <Image
              source={require('./images/VideoChatIcon.png')}
          />
          <View>
            <Text>Pricing</Text>
            <Text>199MYR</Text>
            <Text>For Video Call</Text>
          </View>
          <TouchableOpacity>
            <Text>Video</Text>
          </TouchableOpacity>

        </View>

        <View>
          <Text>Payment By</Text>
          <TouchableOpacity><Text>Back</Text></TouchableOpacity>
          <TouchableOpacity><Text>Accept</Text></TouchableOpacity>
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
  header:{
    flex:0.05,
  },
  abc:{
    flex:0.15,
  },
  body:{
    flex:0.7,
  },
  footer:{

  },


 
  
  
});
