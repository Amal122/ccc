import React from 'react';
import propTypes from 'prop-types';
import {View,Text,TextInput,TouchableHighlight} from 'react-native';
import color from 'color';
import style from './style';

const Input =(props) => {
    //const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
        //styles.$buttonBackgroundColorModifier,
//);
    
      const containerStyles = [style.container];
      if (props.editable === false) {
        containerStyles.push(style.containerDisabled);
      }
    
      return (
        <View style={containerStyles}>
          <TouchableHighlight
            onPress={props.onPress}
            style={style.buttonContainer}
           // underlayColor={underlayColor}
          >
            <Text style={style.buttonText}>{props.buttonText}</Text>
          </TouchableHighlight>
          <View style={style.separator} />
          <TextInput 
          style={style.input}
           placeholder="Type here to convert!"
           underlineColorAndroid="transparent" {...props} />
        </View>
      );
    };
    

Input.propTypes= {
    onPress: propTypes.func,
    buttonText: propTypes.string,
    editable: propTypes.bool
};

export default Input;