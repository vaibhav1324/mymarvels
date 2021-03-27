import React from 'react';
import {useCredentialStore} from 'stores/useCredentialStore';
import {SignUpProps} from './SignUp.props';
import SignUpView from './SignUp.view';

const SignUpContainer = (props: SignUpProps) => {
    const {login} = useCredentialStore((state) => state);

    const onSubmit = async ({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) => {
        await login(email, password);
    };

    return <SignUpView onSubmit={onSubmit} />;
};

export default SignUpContainer;
