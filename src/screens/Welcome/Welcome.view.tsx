import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from 'components/Button';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from 'navigation/MainNavigation';
import {width} from 'constants/theme';
import WithLogoContainer from 'components/WithLogoContainer';

const WelcomeScreen = () => {
    const {navigate} = useNavigation();
    return (
        <WithLogoContainer>
            <View style={styles.buttonContainer}>
                <Button title="login" onPress={() => navigate(ROUTES.LOGIN)} />
                <Button
                    title="signUp"
                    type="outline"
                    onPress={() => navigate(ROUTES.SINGUP)}
                />
            </View>
        </WithLogoContainer>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width,
        marginBottom: 80,
    },
});
export default WelcomeScreen;
