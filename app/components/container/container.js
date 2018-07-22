import React,{propTypes} from 'react';
import {View} from 'react-native';
import style from './style';

const container = ({children}) =>   (
<View styles={style.comtainer}>
{children}

 </View>   
);

comtainer.proptypes = {children: propTypes.element,};
export default comtainer;