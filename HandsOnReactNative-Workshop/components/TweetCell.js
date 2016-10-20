import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class TweetCell extends Component {
  render() {
    const { tweet } = this.props;
    const {
      text,
      user,
    } = tweet;
    const {
      profile_image_url_https
    } = user;
    return (
      <View style={styles.wrapper}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: profile_image_url_https}}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.tweetText}>
            {text}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  tweetText: {
    color: 'black',
    fontSize: 18,
  },
});
