import { StyleSheet, Platform ,Dimensions} from "react-native";
import { colors } from "./colors";

const styles = StyleSheet.create({

topView: {
flex: 1.0,
justifyContent: "center",
backgroundColor:colors.red
},

middleView:{
flex: 1.8,
justifyContent: "flex-start",
alignItems:"center",
backgroundColor:colors.sliver,
},

gapView:{
flex: 0.1,
},
bottomView: {
flex: 7.1,
alignItems: "center",
marginBottom:10,
backgroundColor:colors.sliver,
},

wrapper: {
flex: 1
},

buttonStyle:{
flexDirection: 'row',
justifyContent: 'space-between',
marginTop:10
},

buttonText:{
fontSize: 16,
fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
fontWeight: '600',
color: colors.whites,
textAlign: 'center'
},

middleButtonContainer:{
width: 110,
height: 33,
margin:2,
borderRadius:20,
backgroundColor: colors.whites,
borderWidth:1,
borderColor:colors.greyColor,
justifyContent: "center",
alignItems: "center",
},

nameText:{
fontSize: 25,
fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
color: colors.deepGrey,
fontWeight: 'bold',
alignItems:"center",
justifyContent:"center",
marginTop:70
},

chatText:{
fontSize: 15,
fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
color: colors.deepGrey,
alignItems:"center",
justifyContent:"center",
},

nameTexts:{
fontSize: 25,
fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
color: colors.deepGrey,
fontWeight: 'bold',
alignItems:"center",
justifyContent:"center",
},

crossstyle: {
width: 22,
height: 22,
marginLeft: 10,
},

queryContainer:{
width: 360,
height: 70, 
borderColor: colors.whites,
justifyContent: "center",
alignItems: "center", 
},

chatbox:{
width: 260,
height: 50, 
borderColor: colors.whites,
justifyContent: "center",
backgroundColor:colors.whites,
alignItems: "center",
marginTop:40 ,

},

middlebuttonText:{
fontSize: 12,
fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
fontWeight: '200',
color: colors.silver,
fontWeight: 'bold',
textAlign: 'center'
},

VideoCallPaymenttopView: {
    flex: 1.0,
    justifyContent: "center",
    
    },
    
    VideoCallPaymentmiddleView: {
    flex: 4.0,
    justifyContent: "flex-start",
    alignItems: "center",
    },
    
    VideoCallPaymentabovemiddleView:{
    flex: 2.0,
    justifyContent: "flex-start",
    },
    
    VideoCallPaymentupperbottomview:{
        flex: 1.5,
        justifyContent:"center",
    },
    VideoCallPaymentupperbottomviewText:{
        flexDirection:'row',
        marginLeft:10,
        fontSize:18,
    },
    VideoCallPaymentupperbottomviewCheckbox:{
        marginBottom:15,
    },
    VideoCallPaymenttermsAndConditionLink:{
        textDecorationLine: 'underline',
        marginTop:6
    },
    VideoCallPaymenttermtext:{
     marginTop:6,
    },
    VideoCallPaymentbottomView: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10,
    },
    
    VideoCallPayment: {
    flex: 1
    },
    
    VideoCallPaymentnameText:{
    fontSize: 25,
    fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
    color: colors.deepGrey,
    fontWeight: 'bold',
    marginLeft:10
    },
    
    VideoCallPaymentnameTexts:{
    fontSize: 15,
    fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
    lineHeight: 22,
    color: colors.deepGrey,
    fontWeight: 'bold',
    marginLeft:12
    },
    
    VideoCallPaymentbacktyle: {
    width: 22,
    height: 22,
    marginLeft: 10,
    
    },
    
    VideoCallPaymentpriceContainer:{
    width: 180,
    height: 210,    
    backgroundColor: colors.whites,
    borderRadius: 10,
    borderWidth:1,
    borderColor: colors.nevada,
    justifyContent: "center",
    alignItems: "center",     
    },
    
    VideoCallPaymentlowerbottomButtonContainer:{
    width: 160,
    height: 45,
    backgroundColor: colors.red,
    borderRadius: 10,
    borderWidth:1,
    borderColor: colors.red,
    justifyContent: "center",
    alignItems: "center",
    },
    
    VideoCallPaymentlowersbottomButtonContainer:{
    width: 160,
    height: 45,
    backgroundColor: colors.nevada,
    borderRadius: 10,
    borderWidth:1,
    borderColor: colors.nevada,
    justifyContent: "center",
    alignItems: "center",
    },
    
    VideoCallPaymentprice:{
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
    fontWeight: '200',
    color: colors.lightwhite,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:30
    },
    
    VideoCallPaymentvideoText:{
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
    fontWeight: '200',
    color: colors.deepGrey,
    fontWeight: 'bold',
    textAlign: 'center',
    
    },
    
    VideoCallPaymentpriceButton:{
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
    fontWeight: '200',
    color: colors.red,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:5
    },
    
    VideoCallPaymentbottombuttonText:{
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
    fontWeight: '200',
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
    },
    
    
    VideoCallPaymentupdatebottombuttonText:{
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "PruSansNormal-Demi" : "pruSansBold",
    fontWeight: '200',
    color: colors.whites,
    fontWeight: 'bold',
    textAlign: 'center'
    },
    
    
    VideoCallPaymentbottombuttonStyle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:15 
    },
    
    VideoCallPaymentspaceingbottom:{
    width: 25
    },

});

export default styles;