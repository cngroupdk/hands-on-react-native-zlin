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

import { TweetCell } from './components/TweetCell';

export default class AwesomeProject extends Component {
  renderTag(groupTitle, index) {
    return (
      <View style={styles.hastagWrapper}  key={index}>
        <Text style={styles.hastagTitle}>#{groupTitle}</Text>
        <TweetCell tweetText={'Hello from ' + groupTitle} />
      </View>
    );
  }
  render() {
    const groups = Object.keys(DATA.groups);
    return (
      <View style={styles.container}>
        {groups.map((groupTitle, index) =>
          this.renderTag(groupTitle, index)
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
