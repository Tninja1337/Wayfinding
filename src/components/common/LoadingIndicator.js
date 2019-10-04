import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadingIndicator = ({ size }) => {
    return (
        <View style={styles.loaderStyles}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    loaderStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { LoadingIndicator };