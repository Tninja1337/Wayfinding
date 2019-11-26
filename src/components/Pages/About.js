import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input, Header, Button} from '../common';

class FoodAdmin extends Component {
  static navigationOptions = {
    title: 'About',
  };

  onChangeUserName() {
    console.log('Changed Text');
  }

  render() {
    return (
      <SafeAreaView style={styles.authContainerStyles}>
        <View style={styles.buttonContainer}>
          <Icon.Button name="school" backgroundColor="#d64309" size={40}>
            <Text style={styles.buttonText}>Tutoring</Text>
          </Icon.Button>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  authContainerStyles: {
    flex: 1,
    alignSelf: 'center',
    width: '90%',
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

export default connect(mapStateToProps)(FoodAdmin);
