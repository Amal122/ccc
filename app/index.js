import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";


import Navigator from './Config/routes';
import Home from './screens/home';

EStyleSheet.build({
$primaryBlue: '#4F6D7A',
$primaryOrange: '#4F6D7B',
$primarGreen: '#4F6D7C',
$white: '#FFFFFF',
$border:'#E2E2E2',

//outline: 1,
});


export default () => <Navigator/>;
//export default () => <Home/>;