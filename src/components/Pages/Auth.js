import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Input, Header, Button} from '../common';

class Auth extends Component {
  static navigationOptions = {
    title: 'Bronco BEAM',
  };

  onSignInClicked() {
    this.props.navigation.navigate('App');
  }
  render() {
    return (
      <SafeAreaView style={styles.authContainerStyles}>
        <Button
          style={styles.authButtonStyle}
          onPress={this.onSignInClicked.bind(this)}>
          Sign-in With Boise State
        </Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  authContainerStyles: {
    flex: 1,
    justifyContent: 'center',
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

export default connect(mapStateToProps)(Auth);
