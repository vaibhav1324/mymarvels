import React from 'react';
import {Platform, SafeAreaView, View, ViewProps} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

const SafeView = (
    props: (ViewProps | SafeAreaViewProps) & {children: React.ReactNode},
) => {
    const Container = Platform.OS === 'ios' ? SafeAreaView : View;
    return (
        <Container {...props} style={{flex: 1}}>
            {props.children}
        </Container>
    );
};

export default SafeView;
