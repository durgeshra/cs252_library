import React, { Component } from 'react';
import {
	ScrollView,
	Text,
    Image,
	View,
    AppRegistry,
	Button
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Books from './Books';
import { StackNavigator } from "react-navigation";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
class Welcome extends Component {

    
	goToBooks = () => {

        console.log(this.props);
        this.props.navigation.navigate('Books');
    }

    goToLogout = () => {

        console.log(this.props);
        this.props.navigation.navigate('Login');
    }


	render() {
        console.disableYellowBox = true;
		const photo = global.photoLink;
		const name = global.name;
		const logo = global.logo;
		// console.log(name);
		// console.log(">>>>>>>>>>>>>>");

		return (
				
               

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {logo && (
                    <Image
                        source={{ uri: logo }}
                        style={{ width: 120, height: 120 }}
                    />
                    )}
                    <View style={{margin:7}} />
                	<Text 
						style={{fontSize: 27}}>

						Welcome {name}!
					</Text>

                    <View style={{margin:7}} />

                    {photo && (
                    <Image
                        source={{ uri: photo }}
                        style={{ width: 150, height: 150 }}
                    />
                    )}

                    <View style={{margin:7}} />

                    <Button
			            onPress={this.goToBooks}
			            title="Go To Library Now"
		        	/>
					<View style={{margin:7}} />					
                    <Button
                     	color="#ff0000"
			            onPress={this.goToLogout}
			            title="Logout Now"
		        	/>
                </View>


        )
	}
}

AppRegistry.registerComponent('Secured', () => Secured);

export default Welcome;