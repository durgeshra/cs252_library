import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { movies } from './data';
import MoviePoster from './MoviePoster';
import MoviePopup from './MoviePopup';
import { StackNavigator } from "react-navigation";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Confirmation from './Confirmation';
import Upload from './Upload';

export default class Movies extends Component {
    state = {
        popupIsOpen: false,
        // Day chosen by user
        chosenDay: 0,       // choose first day by default
        // Time chosen by user
        chosenTime: null,
      }
    
      openMovie = (movie) => {
        this.setState({
          popupIsOpen: true,
          movie,	
        });
      }
      closeMovie = () => {
        this.setState({
          popupIsOpen: false,
          // Reset values to default ones
          chosenDay: 0,
          chosenTime: null,
        });
      }  
      chooseDay = (day) => {
        this.setState({
          chosenDay: day,
        });
      }
    
      chooseTime = (time) => {
        this.setState({
          chosenTime: time,
        });
      }

      bookTicket = () => {
        // Make sure they selected time 
        if (!this.state.chosenTime) {
          alert('Please select show time');
        } else {
          // Close popup
          this.closeMovie();
          // Navigate away to Confirmation route
        //   this.props.navigator.push({
        //     name: 'confirmation',
        //     // Generate random string
        //     code: Math.random().toString(36).substring(6).toUpperCase(),
        //   });
      this.props.navigation.navigate('Confirmation', {
            // Generate random string
            code: Math.random().toString(36).substring(6).toUpperCase(),
          });
        //   <Confirmation code={Math.random().toString(36).substring(6).toUpperCase()} />;
        }
      }
      onLogoutPress = () => {
        this.props.navigation.navigate('Login');
    }

    onUploadPress = () => {
      this.props.navigation.navigate('Upload');
  }
  render() {



    return (



      <View style={styles.container}>
        			<ScrollView style={{padding: 10}}>
				<Text 
					style={{fontSize: 27}}>
					Welcome
				</Text>
				<View style={{margin:0}} />
				<Button
		            onPress={this.onLogoutPress}
		            title="Logout"
		        />
        <Button
		            onPress={this.onUploadPress}
		            title="View or Upload Image"
		        />
		    </ScrollView>
        <ScrollView

      

  

          contentContainerStyle={styles.scrollContent}
		  // Hide all scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {movies.map((movie, index) => <MoviePoster
            movie={movie}
            onOpen={this.openMovie}
            key={index}
          />)}
        </ScrollView>
        <MoviePopup
            movie={this.state.movie}
            isOpen={this.state.popupIsOpen}
            onClose={this.closeMovie}
            chosenDay={this.state.chosenDay}
            chosenTime={this.state.chosenTime}
            onChooseDay={this.chooseDay}
            onChooseTime={this.chooseTime}
            onBook={this.bookTicket}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,         // start below status bar
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});