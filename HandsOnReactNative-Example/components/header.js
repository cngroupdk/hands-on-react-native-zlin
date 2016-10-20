import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    padding: 20,
  },
  headerLine: {
    flexDirection: 'row',
    padding: 1,
  },
  groupSize: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
  },
  groupText: {
    flex: 3,
    fontSize: 16,
    textAlign: 'left',
  },
});

export default class Header extends Component {
  _renderHeaderLine(group, count, index) {
    return (
      <View style={styles.headerLine} key={index}>
        <Text style={styles.groupText}>#{group}:</Text><Text style={styles.groupSize}>{count}</Text>
      </View>
    );
  }

  render() {
    const groupKeys = Object.keys(this.props.groups);
    const { groups } = this.props;

    return (
      <View style={styles.header}>
        {groupKeys.map((group, index) => this._renderHeaderLine(group, groups[group].length, index))}
      </View>
    );
  }
}
