 import React from 'react';
 import propTypes from 'prop-types';
 import {TouchableOpacity,View,Text,Image} from 'react-native';

 import style from './style';

 const Button =({text,onPress})=> (
 <TouchableOpacity style={style.container} onPress={onPress}>
 <View style={style.wrapper}>
     <Image style={style.icon} source={require('./images/exchange.png')}/>
     <Text style={style.text}>{text}</Text>
     </View>
     </TouchableOpacity>

);
 Button.propTypes ={
   text:propTypes.string,
   onPress:propTypes.func,
 };

 export default Button;
