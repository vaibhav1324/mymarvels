/* eslint-disable react-native/no-inline-styles */
import {colors} from 'constants/theme';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as Btn, ButtonProps} from 'react-native-elements';

const Button = (props: ButtonProps) =>
    props.type === 'outline' ? (
        <Btn
            {...props}
            buttonStyle={{...styles.button, backgroundColor: 'white'}}
            titleStyle={{...styles.title, color: colors.primary}}
            containerStyle={{
                ...styles.container,
                borderWidth: 2,
                borderColor: colors.primary,
            }}
            raised
        />
    ) : (
        <Btn
            {...props}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            containerStyle={styles.container}
            raised
        />
    );

const styles = StyleSheet.create({
    container: {
        margin: 10,
        maxWidth: 280,
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 14,
        alignSelf: 'auto',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        textTransform: 'uppercase',
    },
});

export default Button;
