import {ROUTES} from 'navigation/MainNavigation';
import React from 'react';
import {LoginProps} from './Login.props';
import LoginView from './Login.view';

const LoginContainer = (props: LoginProps) => {
    const onSubmit = () => {
        props.navigation.navigate(ROUTES.HOME);
    };
    return <LoginView onSubmit={onSubmit} />;
};

export default LoginContainer;
