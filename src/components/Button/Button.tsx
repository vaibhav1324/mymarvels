/* eslint-disable react-native/no-inline-styles */
import {colors, width} from 'constants/theme';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as Btn, ButtonProps} from 'react-native-elements';

const Button = (props: ButtonProps) =>
    props.type === 'outline' ? (
        <Btn
            {...props}
            buttonStyle={{
                ...styles.button,
                backgroundColor: 'black',
                borderWidth: 0,
            }}
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
        width: width * 0.8,
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
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
    },
});

export default Button;
