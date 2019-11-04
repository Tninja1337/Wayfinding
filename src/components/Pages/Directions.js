import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Button, Card, SearchBar, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class DirectionsComp extends Component {
  static navigationOptions = {
    title: 'Directions',
  };

  state = {
    search: '',
  };

  onChangeUserName() {
    console.log('Changed Text');
  }

  onButtonPress(pageName) {
    this.props.navigation.navigate(pageName);
  }

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;
    const list = [
      {
        title: 'Boise State Student Union',
        leftIcon: 'clear',
        rightIcon: 'heart',
      },
      {
        title: "Albertson's Library",
        leftIcon: 'clear',
        rightIcon: 'heart',
      },
      {
        title: 'Location',
        leftIcon: 'clear',
        rightIcon: 'heart',
      },
      {
        title: 'Location',
        leftIcon: 'clear',
        rightIcon: 'heart',
      },
    ];
    return (
      <SafeAreaView style={styles.containerStyles}>
        <View style={styles.buttonContainer}>
          <Button title="Add Bookmark" buttonStyle={styles.buttonStyle} />
          <Button title="Sort Bookmarks" buttonStyle={styles.buttonStyle} />
        </View>
        <Card>
          <SearchBar
            lightTheme
            placeholder="Search for a bookmark..."
            onChangeText={this.updateSearch}
            value={search}
          />
          {list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{type: 'material', name: item.leftIcon}}
              bottomDivider
              rightIcon={{type: 'material-community', name: item.rightIcon}}
            />
          ))}
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    alignSelf: 'center',
    width: '90%',
    height: '15%',
  },
  buttonStyle: {
    backgroundColor: '#FFA500',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
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

const Directions = connect(mapStateToProps)(DirectionsComp);
export {Directions};
