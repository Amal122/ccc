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
        headerTitle: 'Home',
},
},
Options:{
    screen:Options,
    navigationOptions: {
        headerTitle: 'Options',
      },
},
Themes:{
    screen:Themes,
    navigationOptions: {
        headerTitle: 'Options',
      },
},

});

export default StackNavigator({
Home:{
screen:Home,
navigationOptions:{
    header: () => null,
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