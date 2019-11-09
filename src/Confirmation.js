import React, { Component } from 'react';
import {PropTypes} from 'prop-types';

import {
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View
} from 'react-native';
import { defaultStyles } from './styles';

import { captureScreen } from "react-native-view-shot";
import CameraRollExtended from 'react-native-store-photos-album'

export default class Confirmation extends Component {

  static propTypes = {
    code: PropTypes.string.isRequired,
    bookRent: PropTypes.string.isRequired,
    week: PropTypes.string.isRequired,
  }

  state = {
      message: '',
      name: '',
      book: '',
      date: ''
  }

  takeShot = () => {
    captureScreen({
      format: "jpg",
      quality: 0.8
    })
    .then(
      uri => {
        CameraRollExtended.saveToCameraRoll({
          uri: uri,
          album: 'Name'
        }, 'photo');
        this.setState({ message: 'Screenshot Taken Successfully!' });
      },
      error => {
        console.error("Oops, snapshot failed", error);
        this.setState({ message: 'Oops! Screenshot Not Taken!' });
      }
    );
  }


  render() {
    const book = global.book;
    console.disableYellowBox = true;
    const { params } = this.props.navigation.state;
    console.log(params);
    console.log("###############");
    const code = params ? params.code : null;
    const bookRent = params ? params.bookRent : "null";
    const week = params ? params.week : "null";
    console.log(params);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Your confirmation code</Text>

        <Text style={styles.code}>{code}</Text>
          <View style={{margin:7}} />

          <Text style={{  alignItems: 'center', justifyContent: 'center' }}>Name: {global.name}</Text>
          <Text style={{ alignItems: 'center', justifyContent: 'center' }}>Book: {bookRent}</Text>
          <Text style={{alignItems: 'center', justifyContent: 'center' }}>Week: {week}</Text>


          <View style={{margin:17}} />
          <Button
              onPress={this.takeShot}
              title="Take Screenshot"
          />        
          <View style={{margin:7}} />
        {!!this.state.message && (
          <Text
            style={{fontSize: 14, color: 'green', padding: 5}}>
            {this.state.message}
          </Text>
        )}
        <TouchableOpacity
          style={styles.buttonContainer}
          // Go back when pressed
          onPress={() => this.props.navigation.navigate("Books") }
        >

          <Text style={styles.button}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    ...defaultStyles.text,
    color: '#333',
    fontSize: 20,
  },
  code: {
    ...defaultStyles.text,
    color: '#333',
    fontSize: 36,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#673AB7',
    borderRadius: 100,
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  button: {
    ...defaultStyles.text,
    color: '#FFFFFF',
    fontSize: 18,
  },
});