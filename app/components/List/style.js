import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native';
const style= EStyleSheet.create({

    row:{
    paddingHorizontal:16,
    paddingVertical:16,
    backgroundColor:'white'

    },
text:{

},
separator:{
marginLeft:20,
backgroundColor:'$border',
flex:1,
height:StyleSheet.hairlineWidth,
},
icon:{
backgroundColor:'transparent',
width:30,
height:30,
borderRadius:15,
justifyContent:'center',
},
iconVisible:{
backgroundColor:'$primaryBlue'
},
});


export default style;
