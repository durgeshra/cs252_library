import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// Navigators
import { TabNavigator } from 'react-navigation'

// TabNavigator screens
import Books from './Books'
import Upload from './Upload'
// import TabC from './TabC'



export const Tabs = TabNavigator({
    Books: { screen: Books },
    Upload: { screen: Upload },
}, {
  order: ['Books', 'Upload']
})
