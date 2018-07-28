import React from 'react';
import propTypes from 'prop-types';
import {View,Text,TextInput,TouchableHighlight} from 'react-native';
import color from 'color';
import styles from './style';

const Input =(props) => {
    const{onPress,buttonText,editable=true}=props;
    const underlayColor=color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);
    const containerStyle=[styles.Container];
    if(editable==false){
        containerStyle.push(styles.ContainerDisabled);
    }
    return(
<View style={styles.containerStyle} >
<TouchableHighlight
underlayColor={underlayColor}
 style={styles.buttonContainer} onPress={onPress}>
    <Text style={styles.buttonText}> {buttonText}</Text>

    </TouchableHighlight>

    <View styles={styles.border}/>
    <TextInput style={styles.Input} {...props} />
 </View>   

)
};

Input.propTypes= {
    onPress: propTypes.func,
    buttonText: propTypes.string,
    editable: propTypes.bool
}

export default Input;