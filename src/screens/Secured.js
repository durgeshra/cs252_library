import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	View,
    AppRegistry,
	Button,
	Navigator
} from 'react-native';
import Confirmation from '../Confirmation';
import Books from '../Books';
import { StackNavigator } from "react-navigation";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
const RouteMapper = (route, navigator) => {
	if (route.name === 'books') {
	  return (
		<Books navigator={navigator} />
	  );
	} else if (route.name === 'confirmation') {
	  return (
		<Confirmation code={route.code} navigator={navigator} />
	  );
	}
  };
class Secured extends Component {

	// onLogoutPress = () => {
    //     console.log(this.props);
    //     this.props.navigation.navigate('Login');
    // }
	// render() {
	// 	// return (
	// 	// 	<ScrollView style={{padding: 20}}>
	// 	// 		<Text 
	// 	// 			style={{fontSize: 27}}>
	// 	// 			Welcome
	// 	// 		</Text>
	// 	// 		<View style={{margin:20}} />
	// 	// 		<Button
	// 	//             onPress={this.onLogoutPress}
	// 	//             title="Logout"
	// 	//         />
	// 	//     </ScrollView>
    //     // )
	// }
	render() {
		console.disableYellowBox = true;
		return (
			<Books />

		);
	  }
}

// AppRegistry.registerComponent('Secured', () => Secured);

export default Secured;




// import React, { Component } from 'react';
// import {
//   Navigator,
// } from 'react-native';
// import Books from './Books';

// const RouteMapper = (route, navigator) => {
//   if (route.name === 'books') {
//     return <Books navigator={navigator} />;
//   }
// };

// export default class App extends Component {
//   render() {
//     return (
//       <Navigator
//         // Default to books route
//         initialRoute={{ name: 'books' }}
//         // Use FloatFromBottom transition between screens
//         configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
//         // Pass a route mapper functions
//         renderScene={RouteMapper}
//       />
//     );
//   }
// }
