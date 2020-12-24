import {ParamListBase} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {Comics} from 'types/comics';

export type ComicsProps = StackScreenProps<ParamListBase> & {};

export type ComicsGeneratedProps = {
    comics: Array<Comics>;
    isLoading: boolean;
};
