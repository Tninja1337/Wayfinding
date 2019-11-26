import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const FoodNotificationButton = props => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.textContainer}>
        <Text>HEADER CONTENT</Text>
        <Text>BODY CONTENT</Text>
      </View>
      <View>
        <Icon name="add" type="material" color="#517fa4" />
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 0.1,
  },
  textContainer: {
    flex: 9,
  },
  iconContainer: {
    flex: 1,
  },
};

export {FoodNotificationButton};
