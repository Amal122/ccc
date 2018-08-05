import React from 'react;'
import {View,TouchableOpacity,Image} from 'react-native';
import style from './style';

const Head = (onPress) => (
<View style={style.container}>
<TouchableOpacity onPress={onPress} style={styles.button}>
<Image source={require('../Button/images/exchange.png')} />
 </TouchableOpacity>  

 </View>   

);
Head.propTypes = {
    onPress: PropTypes.func,
  };

export default Head;