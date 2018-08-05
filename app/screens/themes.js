import React,{Component} from 'react';
import {ScrollView,StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ListItem from '../components/List/listItem';
import Separator from '../components/List/separator';

const style =EStyleSheet.create({})


class Themes extends Component{

handleThemePress =() =>{

    console.log('press theme');
}
render(){
return(

<ScrollView>
<StatusBar translucent={false} barStyle="light-content" />
<ListItem
text='Blue'
handleThemePress={this.handleThemePress}
Selected
checkmark={false}/>
<Separator/>
<ListItem
text='Green'
handleThemePress={this.handleThemePress}
Selected
checkmark={false}/>
<Separator/>
<ListItem
text='Orange'
handleThemePress={this.handleThemePress}
Selected
checkmark={false}/>

</ScrollView>
);

}


}
 

export default Themes;