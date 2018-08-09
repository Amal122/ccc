import React from 'react';
import {View,TouchableOpacity,Image} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Head = ({onPress}) => (
<View style={style.container}>
<TouchableOpacity onPress={onPress} style={style.button}>
<Image source={require('../Button/images/exchange.png')} />
 </TouchableOpacity>  

 </View>   

);
Head.propTypes = {
    onPress: PropTypes.func,
  };

export default Head;