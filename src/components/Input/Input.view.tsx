import {width} from 'constants/theme';
import React from 'react';
import {Input} from 'react-native-elements';
import {InputProps} from './input.props';

const InputView = (props: InputProps) => {
    return (
        <Input
            {...props}
            labelStyle={{color: '#a7a7a7'}}
            placeholderTextColor="#a7a7a7"
            containerStyle={{width: width * 0.8, marginTop: 5}}
            inputStyle={{paddingLeft: 5, color: '#a7a7a7'}}
        />
    );
};

export default InputView;
