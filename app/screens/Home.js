import React,{Component} from 'react';
import {StatusBar} from 'react-native';
import Container from '../components/Container/Container';
import Abc from '../components/Logo';
import Input from '../components/TextInput/Inputwithbutton'


const TempBase = "$";
const TempQuate ="Rs";
const BasePrice ="100";
const QuatePrice ="22";

class Home extends Component{
handlePressBaseCurrency = () =>{
console.log('press Base');
};
handlePressQuateCurrency = () =>{
    console.log('press Quate');
    };
handleTextChange =(text) =>{
    console.log('change text',text);
}    

render(){
return(


    <Container> 
        <StatusBar translucent={false} barStyle="light-content" />
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
        </Container>
);
}
}
export default Home;