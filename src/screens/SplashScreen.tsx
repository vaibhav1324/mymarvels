import WithLogoContainer from 'components/WithLogoContainer';
import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';

const SplashScreen = () => {
    return (
        <WithLogoContainer>
            <ActivityIndicator
                style={styles.loader}
                animating
                color="white"
                size="large"
            />
        </WithLogoContainer>
    );
};

const styles = StyleSheet.create({
    loader: {
        marginTop: 150,
    },
});

export default SplashScreen;
