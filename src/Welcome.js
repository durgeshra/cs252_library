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

		const photo = global.photoLink;
		const name = global.name;
		const logo = global.logo;

		return (
				

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {logo && (
                    <Image
                        source={{ uri: logo }}
                        style={{ width: 150, height: 150 }}
                    />
                    )}
                    <View style={{margin:17}} />
                	<Text 
						style={{fontSize: 27}}>

						Welcome {name}!
					</Text>
                    {photo && (
                    <Image
                        source={{ uri: photo }}
                        style={{ width: 150, height: 150 }}
                    />
                    )}
                    <Button
			            onPress={this.goToBooks}
			            title="Go To Library Now"
		        	/>

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