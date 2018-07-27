import React from 'react';
import propTypes from 'prop-types';
import {View,Text,TextInput,TouchableHighlight} from 'react-native';

import styles from './style';

const Input =({onPress,buttonText,editable}) => null;

Input.propTypes= {
    onPress: propTypes.func,
    buttonText: propTypes.string,
    editable: propTypes.bool
}

export default Input;