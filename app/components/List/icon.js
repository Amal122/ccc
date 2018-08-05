import React from 'react';
import propTypes from 'prop-types';
import {View,Image} from 'react-native';
import style from './style';

const Icon = ({checkmark,visible}) => {
const iconstyle=[style.icon];
if(visible){
    iconstyle.push(style.iconVisible);
}
return <View style ={iconstyle}>
{checkmark ? < Image source ={require('./images/images/check.png')}/> : null}
</View>
};

Icon.propTypes={
checkmark:propTypes.bool,
visible:propTypes.bool,
}

export default Icon;