import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput,FlatList} from 'react-native';


export default class FlatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [
            { key: "Skptricks" ,value:"https://www.gstatic.com/webp/gallery/1.jpg"},
            { key: "Sumit",value:"https://www.gstatic.com/webp/gallery/1.jpg" },
            { key: "Amit",value:"https://www.gstatic.com/webp/gallery/1.jpg"},
            { key: "React",value:"https://www.gstatic.com/webp/gallery/1.jpg" },
            { key: "React Native",value:"https://www.gstatic.com/webp/gallery/1.jpg" },
          ],
        };
    }
    componentDidMount() {
        //this.makeRemoteRequest();
    }
   

    render() {
    
        return (
        <View style={styles.container}>

            <FlatList>
                data={this.state.data}
                renderItem={(
                    {item}) => <Text style={styles.item}> {item.key} </Text>
                    }
            </FlatList>
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
