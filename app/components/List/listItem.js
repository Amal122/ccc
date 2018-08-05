import React from 'react';
import propType from 'react-native';
import {Text,View,TouchableHighlight,checkmark} from 'react-native';
import style from './style';
import Icon from './icon';


const ListItem = ({text,Selected=false,onPress,checkmark=true,visible=true,customIcon=null,}) => (
<TouchableHighlight onPress={onPress}>
<View style={style.row}>
<Text style={style.text}>{text}</Text>
{Selected ? <Icon checkmark={checkmark} visible={visible}/>: <Icon/>}
{customIcon}
 </View>   

 </TouchableHighlight>   
);
ListItem.propType={
Text:propType.string,
Selected:propType.bool,
onPress:propType.func,
checkmark:propType.bool,
visible:propType.bool,
customIcon:propType.element,
};



export  default  ListItem;