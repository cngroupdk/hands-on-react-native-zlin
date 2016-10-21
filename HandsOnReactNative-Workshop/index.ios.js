import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import DATA from './simple.json';

import { TweetCell } from './components/TweetCell';

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
    };
  }

  componentDidMount() {
    // To make HTTP protocol work on iOS, you have to enable HTTP in Info.plist,
    // (iOS 10 requres apps to use HTTPS by default)
    // to fix it see: https://github.com/cngroupdk/hands-on-react-native-zlin#fix-ios-app-transport-security
    return fetch('http://handson.pro/react-native-zlin/api/simple.json').then(
      response => response.json()
    ).then(data => this.setState({
      isLoading: false,
      data: data,
    }));
  }

  renderTag(groupTitle, index, tweets) {
    return (
      <View style={styles.hastagWrapper} key={index}>
        <Text style={styles.hastagTitle}>#{groupTitle}</Text>
        {tweets.map((tweet, index) =>
          <TweetCell tweet={tweet} tweetText={tweet.text} key={index} />
        )}
      </View>
    );
  }

  render() {
    const { isLoading, data } = this.state;
    console.log('--- data:', data);

    if (isLoading) {
      return <Text>Loading...</Text>;
    }

    const groups = Object.keys(data.groups);
    return (
      <ScrollView>
        <View style={styles.container}>
          {groups.map((groupTitle, index) =>
            this.renderTag(groupTitle, index, data.groups[groupTitle])
          )}
        </View>
      </ScrollView>
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
