import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	View,
    AppRegistry,
	Button
} from 'react-native';

class Secured extends Component {
	render() {
		return (
			<ScrollView style={{padding: 20}}>
				<Text 
					style={{fontSize: 27}}>
					Welcome
				</Text>
				<View style={{margin:20}} />
				<Button
		            onPress={this.props.onLogoutPress}
		            title="Logout"
		        />
		    </ScrollView>
        )
	}
}

AppRegistry.registerComponent('Secured', () => Secured);

export default Secured;