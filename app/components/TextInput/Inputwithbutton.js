import React from 'react';
import propTypes from 'prop-types';
import {View,Text,TextInput,TouchableHighlight} from 'react-native';
import color from 'color';
import styles from './style';

const Input =(props) => {
    //const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
        //styles.$buttonBackgroundColorModifier,
//);
    
      const containerStyles = [styles.container];
      if (props.editable === false) {
        containerStyles.push(styles.containerDisabled);
      }
    
      return (
        <View style={containerStyles}>
          <TouchableHighlight
            onPress={props.onPress}
            style={styles.buttonContainer}
           // underlayColor={underlayColor}
          >
            <Text style={styles.buttonText}>{props.buttonText}</Text>
          </TouchableHighlight>
          <View style={styles.separator} />
          <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
        </View>
      );
    };
    

Input.propTypes= {
    onPress: propTypes.func,
    buttonText: propTypes.string,
    editable: propTypes.bool
};

export default Input;