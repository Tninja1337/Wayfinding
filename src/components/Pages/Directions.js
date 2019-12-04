import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, SearchBar, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


class DirectionsComp extends Component {
  static navigationOptions = {
    title: 'Directions',
  };

    state = {
        search: '',
        dummyList: [
            {
                title: 'Boise State Student Union',
                leftIcon: 'close',
                rightIcon: 'heart-outline',
                id: '1',
                favorite: false,
            },
            {
                title: "Albertson's Library",
                leftIcon: 'close',
                rightIcon: 'heart-outline',
                id: '2',
                favorite: false,
            },
            {
                title: 'Location',
                leftIcon: 'close',
                rightIcon: 'heart-outline',
                id: '3',
                favorite: false,
            },
            {
                title: 'Location',
                leftIcon: 'close',
                rightIcon: 'heart-outline',
                id: '4',
                favorite: false,
            },
            {
                title: 'Location',
                leftIcon: 'close',
                rightIcon: 'heart-outline',
                id: '5',
                favorite: false,
            },
            {
                title: 'Location',
                leftIcon: 'close',
                rightIcon: 'heart-outline',
                id: '6',
                favorite: false,
            },
     
        ],
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

    onDeleteBookmarkPressed(id) {
        var holderArray = this.state.dummyList;
        for (var i = 0; i < holderArray.length; i++) {
            var obj = holderArray[i];
            if (obj.id == id) {
                holderArray.splice(i, 1);
            }
        }
        this.setState({ dummyList: holderArray });

    }

    onFavoriteBookmarkPressed(id) {
        var holderArray = this.state.dummyList;
        
            var obj = holderArray[id-1];
        if (obj.rightIcon == 'heart-outline') {
            obj.rightIcon = 'heart';
            obj.favorite= true;

        }
        else {
            obj.rightIcon = 'heart-outline'
            obj.favorite = false;
        }
        this.setState({ dummyList: holderArray });
        
    }


    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <SafeAreaView style={styles.containerStyles}>
                <View style={styles.buttonContainer}>
                    <Button title="Add Bookmark" buttonStyle={styles.buttonStyle} />
                    <Button title="Sort Bookmarks" buttonStyle={styles.buttonStyle} />
                </View>
                <Card
                    containerStyle={{ height: '50%' }}
                    wrapperStyle={styles.bookMarkContainer}>
                    <SearchBar
                        lightTheme
                        placeholder="Search for a bookmark..."
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                    <ScrollView>
                        {this.state.dummyList.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={
                                    <Icon
                                        size={26}
                                        raised
                                        name={item.leftIcon}
                                        type="material-community"
                                        onPress={this.onDeleteBookmarkPressed.bind(this, item.id)}
                                    />
                                }
                                bottomDivider
                                rightIcon={
                                    <Icon
                                        size={26}
                                        raised
                                        name={item.rightIcon}
                                        type="material-community"
                                        onPress={this.onFavoriteBookmarkPressed.bind(this, item.id)}
                                    />
                                }
                            />
                        ))}
                    </ScrollView>
                </Card>
            </SafeAreaView>
            

        );

        return (
            <SafeAreaView style={styles.containerStyles}>
                <View style={styles.buttonContainer}>
                    <Button title="Add Bookmark" buttonStyle={styles.buttonStyle} onPress={this.addButtonPress} />
                    <Button title="Sort Bookmarks" buttonStyle={styles.buttonStyle} onPress={this.sortButtonPress} />
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
                            rightIcon={
                                <Icon
                                    size={26}
                                    rasied
                                    name={item.rightIcon}
                                    type="material-community"
                                    onPress={this.favoriteIconPress}
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
        shadowOffset: { width: 0, height: 2 },
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
    return { libraries: state.libraries };
};


const Directions = connect(mapStateToProps)(DirectionsComp);
export {Directions};

