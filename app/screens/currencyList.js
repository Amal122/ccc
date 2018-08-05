import React,{Component} from 'react';
import propTypes from 'prop-types';
import {Text,FlatList} from 'react-native';
import currencies from '../Data/currencies';
import ListItem from '../components/List/listItem';
import Separator from '../components/List/separator';


const TempCurrentCurrency ='CAD';

 class CurrencyList extends Component{
    static propTypes = {
        navigation:propTypes.object,
    }

handlePress=() => {
    console.log('row press');
    this.props.navigation.goBack(null);
};
render() {
    return(
    <FlatList
     data={currencies}
     renderItem={({item})=> 
     <ListItem text ={item}
     selected={item==TempCurrentCurrency}
     onPress={this.handlePress}
     
     />
 }

     keyExtractor={(item)=>item}
     ItemSeparatorComponent={Separator}
    />
 );
}
 }


 export default CurrencyList;