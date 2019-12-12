import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, Picker, TouchableHighlight, Modal } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, SearchBar, ListItem, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from 'react-native-picker-select';





class DirectionsComp extends Component {
    static navigationOptions = {
        title: 'Directions',
    };

    state = {
        search: '',
        sortSelect: 'Sort',
        sorting: false,
        modalVisible: false,
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
        ],
    };
    onChangeUserName() {
        console.log('Changed Text');
    }
    onButtonPress(pageName) {
        this.props.navigation.navigate(pageName);
    }
    addButtonPress() {
        navigate('Add')
        console.log("Add bookmark pressed")
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    onDeleteBookmarkPressed(id) {
        var holderArray = this.state.dummyList;
        for (var i = 0; i < holderArray.length; i++) {
            var obj = holderArray[i];
            if (obj.id == id) {
                holderArray.splice(i, 1);
                obj.favorite = false;
            }
        }
        this.setState({ dummyList: holderArray });
    }
    onFavoriteBookmarkPressed(id) {
        var holderArray = this.state.dummyList;
        for (var i = 0; i < holderArray.length; i++) {
            var obj = holderArray[i];
            if (obj.id == id) {
                if (obj.rightIcon == 'heart-outline') {
                    obj.rightIcon = 'heart';
                    obj.favorite = true;
                }
                else {
                    obj.rightIcon = 'heart-outline'
                    obj.favorite = false;
                }
                this.setState({ dummyList: holderArray });
            }
        }
    }
    sortAlphabetically() {
        var holderArray = this.state.dummyList;
        holderArray.sort((a, b) => {
            return a.title > b.title;
        });
        this.setState({ dummyList: holderArray });
    }
    updateSearch = search => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
        const sortLevel = [
            {
                label: 'Sort:',
                value: 'Sort',
                description: 'Select an option to sort',
            },
            {
                label: 'Alphabetically',
                value: 'alphabetically',
                description: 'Sort alphabetically',
            },
            {
                label: 'Distance',
                value: 'distance',
                description:
                    'Sort by distance',
            },
            {
                label: 'Most Visited',
                value: 'visited',
                description:
                    'Sort by most often visited',
            },
            {
                label: 'Most Recent',
                value: 'recent',
                description:
                    'Sort by most recently visited',
            },
        ];
        return (
            <SafeAreaView style={styles.containerStyles}>
                <View style={styles.buttonContainer}>
                    <Button title="Add Bookmark" buttonStyle={styles.buttonStyle} onPress={this.setModalVisible.bind(this, true)} />
                    <RNPickerSelect
                        style={pickerSelectStyles}
                        items={sortLevel}
                        onValueChange={value => {
                            if (value == 'alphabetically') {
                                this.sortAlphabetically()
                            }
                            //call other sort options here in future
                            this.setState({
                                sortSelect: value,
                            });
                        }}
                        value={this.state.sortSelect}
                        useNativeAndroidPickerStyle={false}
                    />
                </View>
                <View style={{ marginTop: 22 }}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}>
                        <View style={{ marginTop: 220 }}>
                            <View>
                                <Text>Add a bookmark here.</Text>
                                <TouchableHighlight onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                    <Text>Close</Text>
                                </TouchableHighlight>
                            </View>
                        </View>

                    </Modal>
                </View>
                <Card
                    containerStyle={{ height: '80%' }}
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
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#FFA500',
        borderRadius: 4,
        color: 'white',
        paddingRight: 30,
    },
    inputAndroid:
    {
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#FFA500',
        borderRadius: 4,
        color: 'white',
        paddingRight: 30,

    }
}
)


const mapStateToProps = state => {
    return { libraries: state.libraries };
};
const Directions = connect(mapStateToProps)(DirectionsComp);
export { Directions };