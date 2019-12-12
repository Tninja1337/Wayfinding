import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input, Header, Button} from '../common';

class HelpComp extends Component {
  static navigationOptions = {
    title: 'Help',
  };

  onChangeUserName() {
    console.log('Changed Text');
  }

  render() {
    return (
      <SafeAreaView style={styles.containerStyles}>
        <Card>
          <Text>
            Welcome to our Digital Wayfinder. This app will help navigate you to
            your destination whether you are outdoors, or in one of our indoor
            Beacon supported areas. At the bottom of the screen are our four
            primary page controls. The rightmost button is Help which you are
            currently on. To the left of it is Settings, which will assist you
            in setting up your profile and notification preferences. The
            leftmost button on the bottom bookmarks any saved locations to help
            you save time and easily start your route anytime. To the right of
            it is the explore page which is where all of your navigation will
            take place.
          </Text>
        </Card>
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

const Help = connect(mapStateToProps)(HelpComp);
export {Help};
