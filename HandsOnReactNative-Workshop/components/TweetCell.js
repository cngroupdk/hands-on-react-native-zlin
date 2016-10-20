import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class TweetCell extends Component {
  render() {
    const tweetText = this.props.tweetText;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.tweetText}>
          {tweetText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
  tweetText: {
    color: 'black',
    fontSize: 18,
  },
});
