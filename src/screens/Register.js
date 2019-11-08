import React, { Component } from 'react';
import Login from './LogIn';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    Alert,
    Image,
    AppRegistry,
    ActivityIndicator
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { StackNavigator } from "react-navigation";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import Environment from './../Environment';

class Register extends Component {


    state = {
    	name: '',
        email: '',
        password: '',
        password2: false,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMErF3PUdWe6IUczNaKKUUXTunMcQpRXIyjonSUPYpoJu2fKWJQ&w=65&h=65',
        message: ''
    }

    _userRegister = () => {

        this.setState({ isLoggingIn: true, message: '' });

        var params = {
        	name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            photo: this.state.photo
        };

        var formBody = [];
        for (var property in params) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(params[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        var proceed = false;
        fetch("http://172.23.150.20:5000/api/users/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            })
            .then((response) => response.json())
            .then((response) => {

                if (response._id) 
                {    proceed = true;
                    this.backToLogin();
                    console.log("SUCCESS");
                } 
                else this.setState({ message: response.message });
            })
            .then(() => {
                
                this.setState({ isLoggingIn: false })
            })
            .catch(err => {
				this.setState({ message: err.message });
				this.setState({ isLoggingIn: false })
			});
    }


    handleChoosePhoto = () => {
        const options = {
          noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            this.setState({ photo: response.uri });
            console.log(response.uri);
          }
        });
      };

    clearName = () => {
        this._name.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearEmail = () => {
        this._email.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearPassword = () => {
        this._password.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }

    clearPassword2 = () => {
        this._password2.setNativeProps({ text: '' });
        this.setState({ message: '' });
    }
    backToLogin = () => {
        console.log(this.props);
        this.props.navigation.navigate('Login');
    }
    render() {
        const photo = this.state.photo;
        console.log(photo);
        return (
            <ScrollView style={{padding: 20}}>
				<Text 
					style={{fontSize: 27}}>
					Login
				</Text>

				<TextInput
					ref={component => this._name = component}
					placeholder='Name' 
					onChangeText={(name) => this.setState({name})}
					autoFocus={true}
					onFocus={this.clearName}
				/>
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
				/>
				<TextInput 
					ref={component => this._password2 = component}
					placeholder='Confirm Password' 
					onChangeText={(password2) => this.setState({password2})}
					secureTextEntry={true}
					onFocus={this.clearPassword2}
				/>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {photo && (
                    <Image
                        source={{ uri: photo }}
                        style={{ width: 150, height: 150 }}
                    />
                    )}
                    <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
                </View>
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
		      		onPress={this._userRegister}
		      		title="Submit"
		      	/>
	      </ScrollView>
        )
    }
}

AppRegistry.registerComponent('Register', () => Register);

export default Register;