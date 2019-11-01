import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {Card, CheckBox, Input, Divider, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FoodNotificationButton} from '../common';

class Explore extends Component {
  static navigationOptions = {
    title: 'Explore',
  };

  onChangeUserName() {
    console.log('Changed Text');
  }

  render() {
    return <SafeAreaView style={styles.containerStyles}></SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    backgroundColor: '#E9E9EF',
  },
});

const mapStateToProps = state => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(Explore);
