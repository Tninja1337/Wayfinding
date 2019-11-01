import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureEntry,
  autoCorrect,
}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureEntry}
        autoCorrect={autoCorrect}
        multiline={true}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 10,
    flex: 2,
  },
  labelStyle: {
    fontSize: 20,
    textAlign: 'auto',
    paddingTop: 0,
    paddingBottom: 0,
    flex: 1,
  },
  containerStyle: {
    paddingTop: 20,
    height: 100,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
};

export {Input};
