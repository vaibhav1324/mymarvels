import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {ParamListBase} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {Animated, RegisteredStyle, ViewStyle} from 'react-native';
import {Character} from 'types/characters';

export type CharactersProps = StackScreenProps<ParamListBase> & {};

export type CharacterGeneratedProps = {
    isLoading: boolean;
    characters?: Array<Partial<Character>>;
};

export type BackButtonProps = {
    onPress: () => void;
    opacity: Animated.Value;
    isOpen?: boolean;
};

export type BackdropProps = {
    data: Array<Partial<Character>>;
    scrollX: Animated.Value;
};

export type CharacterItemProps = Partial<Character> & {
    scrollX: Animated.Value;
    index: number;
    onPress: (index: number) => void;
};

export type CharacterInfoProps = {
    isOpen: boolean;
    character: Partial<Character>;
    bottomSheetRef: React.RefObject<BottomSheetMethods>;
};

export type AnimatedListStyle =
    | false
    | RegisteredStyle<ViewStyle>
    | Animated.Value
    | Animated.AnimatedInterpolation
    | Animated.WithAnimatedObject<ViewStyle>
    | Animated.WithAnimatedArray<any>
    | null
    | undefined;
