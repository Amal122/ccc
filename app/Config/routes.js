import {StackNavigator} from 'react-navigation';

import Home from '../screens/home';
import CurrencyList from '../screens/currencyList';
import Options from '../screens/options';
import Themes from '../screens/themes';

const HomeStack =StackNavigator({
Home:{
    screen:Home,
    navigationOptions:{
        header:() => null,
},
},
Options:{
    screen:Options,
},
Themes:{
    screen:Themes,
},

});

export default StackNavigator({
Home:{
screen:Home,
navigationOptions:{
    header:() => null,
},
},
CurrencyList:{
screen:CurrencyList,
navigationOptions: ({ navigation}) => ({
headerTitle:navigation.state.params.title
}),
},
},
{
mode:'modal',
},
);