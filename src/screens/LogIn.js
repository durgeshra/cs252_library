import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Image,
    Button,
    Alert,
    AppRegistry,
    ActivityIndicator,
    Stylesheet,
    TouchableOpacity
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import { StackNavigator } from "react-navigation";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import Environment from './../Environment';
import Register from './Register';
import Welcome from '../Welcome';

class Login extends Component {

    state = {
        email: '',
        password: '',
        isLoggingIn: false,
        message: ''
    }
    
    constructor(){
        super();
        global.photoLink = '';
        global.name = '';
        global.logo = 'https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_tfop89pt/def_height/200/def_width/200/version/100012/type/1';
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
        fetch("http://172.17.76.37:5000/api/users/login", {
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
                {   
                    proceed = true;
                    console.log("SUCCESS");
                    global.photoLink = response.photo;
                    global.name = response.name;
                } 
                else this.setState({ message: response.message });
            })
            .then(() => {
                this.setState({ isLoggingIn: false })
                
                if(proceed) this.goToSecured();
            })
            .catch(err => {
				this.setState({ message: err.message });
				this.setState({ isLoggingIn: false });
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
        console.log(this.props);
        this.props.navigation.navigate('Register');
    }
    goToSecured = () => {
        console.log(this.props);
        this.props.navigation.navigate('Welcome');
    }

    render() {

        const logo = global.logo;
        
        return (



            <View style={{padding: 10,alignItems: 'center', justifyContent: 'center'}}>
            <View style={{margin:17}} />
                {logo && (
                <Image
                    source={{ uri: logo }}
                    style={{ width: 100, height: 100}}
                />
                )}
                    <View style={{margin:20}} />

				<Text 
					style={{fontSize: 27, textAlign: "center"}}>
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
		      		title="Login Now"
		      	/>
                <View style={{margin:7}} />
                <Button
                    color="#20B2AA" 
                    title="Register Now"
                    onPress={this.onPressRegister}
                  />

                <View style={{margin:7}} />
                <Text 
                    style={{fontSize: 10, textAlign: "right"}}>
                    Logo Credits: Pizza Hut
                </Text>
                <Text 
                    style={{fontSize: 10, textAlign: "right"}}>
                    Default Profile Pic Credits: Cyanide and Happiness
                </Text>
	      </View>
        )
    }
}

export default Login;