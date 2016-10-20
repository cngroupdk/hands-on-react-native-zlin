import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
} from 'react-native';

import DATA from '../simple.json';
import Header from './header';
import MessageCell from './message-cell';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    flex: 1,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  stickyHeader: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
  },
  stickyHeaderText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
    padding: 3,
    paddingLeft: 5,
  },
  reloadButton: {
    height: 32,
    padding: 10,
  },
  reloadButtonText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default class Home extends Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      ds,
      data: null,
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    this._refreshData();
  }

  _refreshData() {
    this.setState({
      isLoading: true,
    });

    fetch('http://handson.pro/react-native-zlin/api/simple.json').then(response => {
      return response.json();
    }).then(json => {
      this.setState({
        data: json,
        isLoading: false,
      });
    }).catch(error => {
      this.setState({
        isLoading: false,
        error: error.toString(),
      });
    });
  }

  _renderSectionHeader(sectionData, sectionId) {
    return (
      <View style={styles.stickyHeader}>
        <Text style={styles.stickyHeaderText}>#{sectionId}</Text>
      </View>
    );
  }

  _renderReloadButton() {
    return (
      <View style={styles.reloadButton}>
        <TouchableOpacity onPress={this._refreshData.bind(this)}>
          <Text style={styles.reloadButtonText}>Reload</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderLoading() {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <Text>Loading....</Text>
      </View>
    );
  }

  _renderError(error) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <Text>{error}</Text>
        {this._renderReloadButton()}
      </View>
    );
  }

  render() {
    // const [data, isLoading, error] = [DATA, false, null];

    const { data, isLoading, error } = this.state;
    if (isLoading) {
      return this._renderLoading();
    }
    if (error) {
      return this._renderError(error);
    }

    const dataSource = this.state.ds.cloneWithRowsAndSections(data.groups);
    return (
      <View style={styles.container}>
        <ListView
          dataSource={dataSource}
          renderHeader={() => <Header groups={data.groups}/>}
          renderSectionHeader={this._renderSectionHeader.bind(this)}
          renderRow={message => <MessageCell message={message} />}
        />
        {this._renderReloadButton()}
      </View>
    );
  }
}
