// import libraries for making a componenet
import React from 'react';
import { Text, View } from 'react-native';
import { isModuleSpecifier } from '@babel/types';
// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.pageTitle}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#d8d8d8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.4,
        elevation: 5,
        position: 'relative'
    }
}

// make the component available to other parts of the app
export { Header };