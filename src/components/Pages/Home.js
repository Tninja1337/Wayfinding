import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input, Header, Button} from '../common';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  onChangeUserName() {
    console.log('Changed Text');
  }

  onButtonPress(pageName) {
    this.props.navigation.navigate(pageName);
  }

  renderAdminButton(boolEventually) {
    if (boolEventually === true) {
      return (
        <View style={styles.buttonContainer}>
          <Icon.Button
            name="bell-ring"
            backgroundColor="#d64309"
            size={40}
            borderRadius={10}
            onPress={this.onButtonPress.bind(this, 'FoodAdmin')}>
            <Text style={styles.buttonText}>Create Alerts</Text>
          </Icon.Button>
        </View>
      );
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.authContainerStyles}>
        <View style={styles.buttonContainer}>
          <Icon.Button
            name="school"
            backgroundColor="#d64309"
            size={40}
            borderRadius={10}
            onPress={this.onButtonPress.bind(this, 'Tutoring')}>
            <Text style={styles.buttonText}>Tutoring</Text>
          </Icon.Button>
        </View>

        <View style={styles.buttonContainer}>
          <Icon.Button
            name="food-fork-drink"
            backgroundColor="#d64309"
            size={40}
            borderRadius={10}
            onPress={this.onButtonPress.bind(this, 'FoodAlerts')}>
            <Text style={styles.buttonText}>Food Alerts</Text>
          </Icon.Button>
        </View>

        {this.renderAdminButton(true)}
        <View style={styles.buttonContainer}>
          <Icon.Button
            name="information"
            backgroundColor="#d64309"
            size={40}
            borderRadius={10}
            onPress={this.onButtonPress.bind(this, 'About')}>
            <Text style={styles.buttonText}>About</Text>
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

export default connect(mapStateToProps)(Home);
