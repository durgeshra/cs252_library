import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { books } from './data';
import BookPoster from './BookPoster';
import BookPopup from './BookPopup';
import { StackNavigator } from "react-navigation";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Confirmation from './Confirmation';
import Upload from './Upload';

export default class Books extends Component {
    state = {
        popupIsOpen: false,
        // Day chosen by user
        chosenDay: 1,       // choose first day by default

        photo: global.photoLink,

        name: global.name,
      }
    
      openBook = (book) => {
        this.setState({
          popupIsOpen: true,
          book,	
        });
      }
      closeBook = () => {
        this.setState({
          popupIsOpen: false,
          // Reset values to default ones
          chosenDay: 1,
          chosenTime: null,
        });
      }  
      chooseDay = (day) => {
        this.setState({
          chosenDay: day,
        });
      }
    

      bookTicket = () => {
        if (!this.state.chosenDay) {
          alert('Please select reservation week');
        } else {
          // Close popup
          this.closeBook();
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


  	const name = global.name;
    return (



      <View style={styles.container}>
 		
        <ScrollView

      

  

          contentContainerStyle={styles.scrollContent}
		  // Hide all scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
        

	


          {books.map((book, index) => <BookPoster
            book={book}
            onOpen={this.openBook}
            key={index}
          />)}
        </ScrollView>
        <BookPopup
            book={this.state.book}
            isOpen={this.state.popupIsOpen}
            onClose={this.closeBook}
            chosenDay={this.state.chosenDay}
            chosenTime={this.state.chosenTime}
            onChooseDay={this.chooseDay}
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