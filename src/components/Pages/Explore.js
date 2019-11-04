import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class ExploreComp extends Component {
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

const Explore = connect(mapStateToProps)(ExploreComp);
export {Explore};
