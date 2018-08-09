import React,{Component} from 'react';
import {ScrollView,StatusBar,Platform,Linking} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import ListItem from '../components/List/listItem';
import Separator from '../components/List/separator';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;


class Options extends Component{

handleThemesPress =()=>{
    console.log('press theme');
    this.props.navigation.navigate('Themes');
};
handleSitePress =() =>{
    console.log('press site');
    Linking.openURL('http://fixer.io').catch(() => alert('An error occured.'));
};

render() {
return(
<ScrollView>

<StatusBar translucent={false} barStyle="default" />

<ListItem
    text="Themes"
    onPress={this.handleThemesPress}
     customIcon={
      <Ionicons name ='ios-arrow-forward' color={ICON_COLOR} size={ICON_SIZE}/>
     }
/>
    
    <Separator/>
    <ListItem
    text="Fixer.io"
    onPress={this.handleSitePress}
    customIcon={
     <Ionicons name ='ios-link' color={ICON_COLOR} size={ICON_SIZE}/>
     }
    />
 
    <Separator />
      </ScrollView>
);

}
}


export default Options;