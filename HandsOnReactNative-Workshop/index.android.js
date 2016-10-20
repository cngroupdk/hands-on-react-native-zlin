/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import DATA from './simple.json';
export default class AwesomeProject extends Component {
  render() {
    const groups = Object.keys(DATA.groups);
    return (
      <View style={styles.container}>
        {groups.map((groupTitle, index) =>
          <View style={styles.hastagWrapper}  key={index}>
            <Text style={styles.hastagTitle}>#{groupTitle}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hastagTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  hastagWrapper: {
    backgroundColor: 'gray',
    alignSelf: 'stretch',
    padding: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
