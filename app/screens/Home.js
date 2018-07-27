import React,{Component} from 'react';
import {StatusBar} from 'react-native';
import Container from '../components/Container';
import Abc from '../components/Logo';
import Input from '../components/TextInput'


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

render(){
return(


    <Container> 
        <StatusBar translucent={false} barStyle="light-content" />
        <Abc/> 
        <Input
        buttonText={TempBase}
        onPress={this.handlePressBaseCurrency}
        
        />

        <Input
         buttonText={TempQuate}
         onPress={this.handlePressQuateCurrency}
         editable={false}
/>
        </Container>
);
}
}
export default Home;