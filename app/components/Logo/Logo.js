import React,{Component} from 'react';
import {View,Image,Text,Keyboard} from 'react-native';
import style from './style';


class Abc extends Component{
componentDidMount(){
this.keyboardShowListener=Keyboard.addListener('keyboardWillShow',this.keyboardShow)
this.keyboardHideListener=Keyboard.addListener('keyboarwillhide',this.keyboardHide)
}
componentWillUnmount(){

}

keyboardShow =()=>
{

};
keyboardHide=()=>
{

};
render(){

return(
    <View style={style.container}>
      <Image style={style.containerImage} source={require('./images/a.jpeg')} /> 
     <Text>Currency Converter</Text>   

     </View>   


);
}
}
export default Abc;