import React from 'react';
import propTypes from 'prop-types';
import {View} from 'react-native';
import style from './style';

const Container = ({children}) =>   (
<View styles={style.Container}>
{children}

 </View>   
);

Container.propTypes = {children: propTypes.any,};
export default Container;