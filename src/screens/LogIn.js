import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    Alert,
    AppRegistry,
    ActivityIndicator,
    Stylesheet,
    TouchableOpacity
} from 'react-native';

import { StackNavigator } from "react-navigation";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import Environment from './../Environment';
import Register from './Register';

class Login extends Component {

    state = {
        email: '',
        password: '',
        isLoggingIn: false,
        message: ''
    }

    _userLogin = () => {

        this.setState({ isLoggingIn: true, message: '' });

        var params = {
            email: this.state.email,
            password: this.state.password
        };

        var formBody = [];
        for (var property in params) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(params[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        var proceed = false;
        fetch("http://172.24.240.154:5000/api/users/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.success==true) 
                {    proceed = true;
                    console.log("SUCCESS");
                } 
                else this.setState({ message: response.message });
            })
            .then(() => {
                this.setState({ isLoggingIn: false })
                if (proceed) this.props.onLoginPress();
            })
            .catch(err => {
				this.setState({ message: err.message });
				this.setState({ isLoggingIn: false });
                this.props.onRegisterPress();
			});
    }

    clearEmail = () => {
        this._email.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearPassword = () => {
        this._password.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    onPressRegister = () => {
        console.log(props);
        this.props.navigation.navigate('Register');
    }

    render() {
        
        return (



            <ScrollView style={{padding: 20}}>
				<Text 
					style={{fontSize: 27}}>
					Login
				</Text>

				<TextInput
					ref={component => this._email = component}
					placeholder='Email' 
					onChangeText={(email) => this.setState({email})}
					autoFocus={true}
					onFocus={this.clearEmail}
				/>
				<TextInput 
					ref={component => this._password = component}
					placeholder='Password' 
					onChangeText={(password) => this.setState({password})}
					secureTextEntry={true}
					onFocus={this.clearPassword}
					onSubmitEditing={this._userLogin}
				/>
				{!!this.state.message && (
					<Text
						style={{fontSize: 14, color: 'red', padding: 5}}>
						{this.state.message}
					</Text>
				)}
				{this.state.isLoggingIn && <ActivityIndicator />}
				<View style={{margin:7}} />
				<Button 
					disabled={this.state.isLoggingIn||!this.state.email||!this.state.password}
		      		onPress={this._userLogin}
		      		title="Submit"
		      	/>

                <Button
                    title="Register"
                    onPress={this.onPressRegister}
                  />

	      </ScrollView>
        )
    }
}

AppRegistry.registerComponent('LogIn', () => Login);

export default Login;