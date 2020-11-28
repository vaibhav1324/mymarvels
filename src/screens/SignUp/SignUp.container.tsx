import React from 'react';
import {View, Text} from 'react-native';
import {SignUpProps} from './SignUp.props';
import SignUpView from './SignUp.view';

const SignUpContainer = (props: SignUpProps) => {
    return SignUpView();
};

export default SignUpContainer;
