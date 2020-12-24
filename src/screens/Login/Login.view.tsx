/* eslint-disable no-alert */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import Input from 'components/Input/Input.view';
import WithLogoContainer from 'components/WithLogoContainer';
import {Formik} from 'formik';
import Button from 'components/Button';
import * as yup from 'yup';
import {colors} from 'constants/theme';
import {LoginGeneratedProps} from './Login.props';

/*const ValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required'),
});
disabled={
    !isValid ||
    values.password === '' ||
    values.email === ''
}*/

const LoginView = (props: LoginGeneratedProps) => {
    return (
        <WithLogoContainer>
            <View style={styles.container}>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={() => props.onSubmit()}
                >
                    {({
                        submitForm,
                        values,
                        handleBlur,
                        setFieldValue,
                        isValid,
                        isSubmitting,
                        errors,
                    }) => (
                        <>
                            <Input
                                value={values.email || ''}
                                onChangeText={(e) => setFieldValue('email', e)}
                                onBlur={handleBlur('email')}
                                label="EMAIL"
                                keyboardType="email-address"
                                placeholder="eg: tonystart@marvel.com"
                                leftIcon={{
                                    type: 'font-awesome',
                                    name: 'envelope',
                                    color: '#a7a7a7',
                                    size: 16,
                                }}
                                errorMessage={errors.email}
                            />
                            <Input
                                label="PASSWORD"
                                keyboardType="ascii-capable"
                                value={values.password || ''}
                                onBlur={handleBlur('password')}
                                onChangeText={(e) =>
                                    setFieldValue('password', e)
                                }
                                placeholder="eg : A2%*as54Z"
                                leftIcon={{
                                    type: 'font-awesome',
                                    name: 'lock',
                                    color: '#a7a7a7',
                                }}
                                errorMessage={errors.password}
                            />
                            <Text
                                style={styles.forgotPass}
                                onPress={() => alert('forgot pass')}
                            >
                                Forgot Password?
                            </Text>
                            <Button
                                title="LOGIN"
                                onPress={submitForm}
                                loading={isSubmitting}
                            />
                        </>
                    )}
                </Formik>
            </View>
        </WithLogoContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    forgotPass: {
        color: colors.primary,
        fontWeight: 'bold',
        textAlign: 'right',
        alignSelf: 'flex-end',
        marginRight: 15,
        marginBottom: 10,
    },
});

export default LoginView;
