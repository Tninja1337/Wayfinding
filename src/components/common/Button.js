import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children, style}) => {
  const {buttonStyle, buttonTextStyle} = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={buttonTextStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#00d9ff',
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

export {Button};
