import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Input, Header, Button} from '../common';

class AuthComp extends Component {
  static navigationOptions = {
    title: 'Theia',
  };

  onSignInClicked() {
    this.props.navigation.navigate('App');
  }
  render() {
    return (
      <SafeAreaView style={styles.containerStyles}>
        <Button
          style={styles.authButtonStyle}
          onPress={this.onSignInClicked.bind(this)}>
          Login to Theia
        </Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    backgroundColor: '#E9E9EF',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  authButtonStyle: {
    backgroundColor: '#FFA500',
    height: 45,
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {libraries: state.libraries};
};

const Auth = connect(mapStateToProps)(AuthComp);
export {Auth};
