import React, { Component } from "react";
import {
Text,
TouchableOpacity,
View,
Image,
FlatList,

} from "react-native";

import styles from "./styles";
import { colors } from "./colors";

export default class Query extends Component {
constructor(props){
super(props);
this.state = {
listData:[
{
question:"We have few queries before1",
button1:"YES",
button2:"NO",
selectedButton:"",
key:'1'
},
{
question:"We have few queries before2",
button1:"YES",
button2:"NO",
selectedButton:"",
key:'2'
},
{
question:"We have few queries before3",
button1:"YES",
button2:"NO",
selectedButton:"",
key:'3'
},
{
question:"We have few queries before4",
button1:"YES",
button2:"NO",
selectedButton:"",
key:'4'
},
],
relations: [
{ name: "YES", key: 1 },
{ name: "NO", key: 2 }
],

count:1,
};
}


_onClickRelation = (item, QuestionObj) =>{
const relations = this.state.listData.map((relation)=>{
if(relation.key === QuestionObj.key){
relation.selectedButton = item.name;
}
else{
relation.isSelected = "NO";
}
return relation;
});
this.setState({ listData: relations, count : this.state.count + 1});

}

_getButtonStyle = (relation,item) =>{
var buttonStyle = styles.middleButtonContainer;
var buttonText = styles.middlebuttonText;
if(relation.name === item.selectedButton){
buttonStyle = [ buttonStyle, {backgroundColor: colors.darkGrey}];
buttonText = [buttonText, {color: colors.white}];
}
return {
button: buttonStyle,
buttonText: buttonText,
}; 
}

_renderRelations = (item) => {
return this.state.relations.map((relation, index) => {
return (
<TouchableOpacity key={index} style={this._getButtonStyle(relation,item).button} onPress={()=>{ this._onClickRelation(relation, item) }}>
<Text style={this._getButtonStyle(relation,item).buttonText}>{relation.name}</Text>
</TouchableOpacity>
);
});
};

Questions=()=>{
return(
<View>

<FlatList
showsVerticalScrollIndicator={false}
ref={ref => this.flatList = ref}
onContentSizeChange={() => this.flatList.scrollToEnd({animated: true})}
extraData = {this.state.listData}
data={this.state.listData.slice(0,this.state.count)}
renderItem={({ item, index }) => (
<View key = {index}>

<TouchableOpacity style={styles.chatbox} disabled={true} >
<Text style={styles.chatText}>{item.question}</Text>
</TouchableOpacity >
<View style={styles.buttonStyle}>{this._renderRelations(item)}</View> 
<View
style={{
marginTop:20,
borderBottomColor: 'black',
borderBottomWidth: 0.5,
}}
/>
</View>
)}
/> 

</View>
);
}

render() {
return (
<View style={styles.wrapper}>

<View style={styles.topView}>
<TouchableOpacity >
<Image
resizeMode="contain"
style={styles.crossstyle}
source={require('./images/back_grey.png')}
/>
</TouchableOpacity>
</View>

<View style={styles.middleView}>
<TouchableOpacity style={styles.queryContainer} disabled={true} >
<Text style={styles.nameText}>We have few queries before </Text>
<Text style={styles.nameTexts}>you can proceed</Text>
</TouchableOpacity>
</View>
<View style={styles.gapView}>
</View>
<View style={styles.bottomView}>
{this.Questions()}
</View>
</View> 
);
}
}