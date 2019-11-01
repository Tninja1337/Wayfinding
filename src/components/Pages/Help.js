import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input, Header, Button} from '../common';

class Help extends Component {
  static navigationOptions = {
    title: 'Help',
  };

  onChangeUserName() {
    console.log('Changed Text');
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyles}>
        <View style={styles.buttonContainer}>
          <Icon.Button name="school" backgroundColor="#FFA500" size={40}>
            <Text style={styles.buttonText}>Tutoring</Text>
          </Icon.Button>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    backgroundColor: '#E9E9EF',
    alignSelf: 'center',
    width: '100%',
  },
  buttonContainer: {
    paddingVertical: 20,
    alignSelf: 'center',
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(Help);
