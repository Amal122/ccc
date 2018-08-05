import React from 'react';
import propTypes from 'prop-types';
import {Text} from 'react-native';
import moment from 'moment';

import style from './style';

const Converted =({date,base,Quate,conversionRate}) =>(
 <Text>
  1 {base} ={conversionRate}{Quate} as of {moment(date).format('MMMM D YYYY')}
  </Text>   
);

Converted.propTypes={
    date:propTypes.object,
    base:propTypes.string,
    Quate:propTypes.string,
    conversionRate:propTypes.number

};

export default Converted; 