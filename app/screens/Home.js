import React,{Component} from 'react';
import {StatusBar,KeyboardAvoidingView} from 'react-native';
import Container from '../components/Container/Container';
import Abc from '../components/Logo';
import Input from '../components/TextInput/Inputwithbutton';
import Button from '../components/Button/labelbutton';
import Converted from '../components/Text/lastConverted';
import propTypes from 'prop-types';
import Head from '../components/Header/header';

const TempBase = "$";
const TempQuate ="Rs";
const BasePrice ="1";
const QuatePrice ="70";
const TempConversion=70;
const TempDate=new Date();


class Home extends Component{
    static propTypes={
     navigation:propTypes.object,
    }
handlePressBaseCurrency = () =>{
console.log('press Base');
this.props.navigation.navigate('CurrencyList',{title: 'Base Currency'});
};
handlePressQuateCurrency = () =>{
    console.log('press Quate');
    this.props.navigation.navigate('CurrencyList',{title: 'Quate Currency'});
    };
handleTextChange =(text) =>{
    console.log('change text',text);
}; 
handleSwapCurrency = ()=>{
    console.log('Press Base Currency'); 
}; 
handleOptionsPress=()=> {
    console.log(' Option press')
}  

render(){
return(


    <Container> 
        <StatusBar translucent={false} barStyle="light-content" />
        <Head onPress={this.handleOptionsPress} />
         {/* <KeyboardAvoidingView behavior="padding">  */}
        <Abc/> 
        <Input 
        buttonText={TempBase}
        onPress={this.handlePressBaseCurrency}
        defaultValue={BasePrice}
        keyboardType="numeric"
        onchangeText={this.handleTextChange}
        /> 

         <Input
         buttonText={TempQuate}
         onPress={this.handlePressQuateCurrency}
         value={QuatePrice}
         editable={false}
/> 
<Converted
base={TempBase}
Quate={TempQuate}
date={TempDate}
conversionRate={TempConversion}
/>
<Button
text="Reverse Currencies"
onPress={this.handleSwapCurrency}

/>
 {/* </KeyboardAvoidingView> */}
        </Container>
);
}
}
export default Home;