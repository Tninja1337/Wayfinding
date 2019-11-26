import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {Card, CheckBox, Input, Divider, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FoodNotificationButton} from '../common';

class FoodAlerts extends Component {
  static navigationOptions = {
    title: 'Food Alerts',
  };

  onChangeUserName() {
    console.log('Changed Text');
  }

  render() {
    return (
      <SafeAreaView style={styles.authContainerStyles}>
        <ScrollView>
          <FoodNotificationButton />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  authContainerStyles: {
    flex: 1,
    backgroundColor: '#E9E9EF',
    borderBottomColor: '#d64309',
    borderBottomWidth: 10,
  },
  buttonContainer: {
    paddingVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
  authButtonStyle: {
    backgroundColor: '#d64309',
    height: 45,
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(FoodAlerts);
