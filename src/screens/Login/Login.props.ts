import { ParamListBase } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type LoginProps = StackScreenProps<ParamListBase> & {};

export type LoginGeneratedProps = {
  onSubmit: (values: { email: string; password: string }) => void;
};
