import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Button, Card, SearchBar, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




class Directions extends Component {
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

    addButtonPress() {
        //adding bookmark code goes here
        console.log("Add bookmark pressed")
      
  }
    sortButtonPress() {
        //sorting bookmark code goes here
        console.log('Sort bookmark pressed')
    }

    clearIconPress() {
        
        
        console.log('Clear icon pressed')
    }

    favoriteIconPress() {

        
        console.log('Favorite icon pressed')
    }


  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;
    const list = [
      {
        title: 'Boise State Student Union',
        leftIcon: 'close',
        rightIcon: 'heart-outline',
      },
      {
        title: "Albertson's Library",
          leftIcon: 'close',
        rightIcon: 'heart-outline',
      },
      {
        title: 'Location',
          leftIcon: 'close',
        rightIcon: 'heart-outline',
      },
      {
        title: 'Location',
          leftIcon: 'close',
        rightIcon: 'heart-outline',
        
      },
    ];
    return (
      <SafeAreaView style={styles.containerStyles}>
        <View style={styles.buttonContainer}>
        <Button title="Add Bookmark" buttonStyle={styles.buttonStyle} onPress={this.addButtonPress}/>
        <Button title="Sort Bookmarks" buttonStyle={styles.buttonStyle} onPress={this.sortButtonPress}/>
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
                  leftIcon=
                  {
                      <Icon
                          size={26}
                          rasied
                          name={item.leftIcon}
                          type="material-community"
                          onPress={this.clearIconPress}
                      />
                  }

              bottomDivider
              rightIcon = {
                  <Icon
                          size={ 26}
                          rasied
                          name={ item.rightIcon }
                          type="material-community"
                          onPress = {this.favoriteIconPress}
                />
}
 
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

export default connect(mapStateToProps)(Directions);
