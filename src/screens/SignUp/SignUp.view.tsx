import React from 'react';
import WithLogoContainer from 'components/WithLogoContainer';
import {Formik} from 'formik';
import {View, StyleSheet} from 'react-native';
import Input from 'components/Input/Input.view';
import Button from 'components/Button';
import * as yup from 'yup';

const ValidationSchema = yup.object().shape({
    fullName: yup.string().required('enter your full name'),
    email: yup
        .string()
        .email('Please enter valid email')
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(8, ({min}) => `Password must be at least ${min} characters`)
        .required('Password is required'),
});

const SignUpView = () => {
    return (
        <WithLogoContainer>
            <View style={styles.container}>
                <Formik
                    initialValues={{
                        fullName: '',
                        email: '',
                        password: '',
                    }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={ValidationSchema}
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
                                value={values.fullName || ''}
                                onChangeText={(e) =>
                                    setFieldValue('fullName', e)
                                }
                                onBlur={handleBlur('fullName')}
                                label="FULLNAME"
                                keyboardType="name-phone-pad"
                                placeholder="eg: Tony Stark"
                                leftIcon={{
                                    type: 'font-awesome',
                                    name: 'user',
                                    color: '#a7a7a7',
                                    size: 16,
                                }}
                                errorMessage={errors.fullName}
                            />
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
                            <Button
                                title="SIGNUP"
                                onPress={submitForm}
                                disabled={
                                    !isValid ||
                                    values.password === '' ||
                                    values.email === '' ||
                                    values.fullName === ''
                                }
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
});
export default SignUpView;
