/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useMemo, useRef, useState} from 'react';
import {height, width} from 'constants/theme';
import {View, Text, Animated, Easing} from 'react-native';
import {Icon, Image} from 'react-native-elements';
import {
    AnimatedListStyle,
    BackButtonProps,
    BackdropProps,
    CharacterGeneratedProps,
    CharacterInfoProps,
    CharacterItemProps,
} from './Characters.props';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Rect} from 'react-native-svg';
import {useToggle} from 'hooks/useToggle';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import {styles} from './Characters.style';

const ITEM_SIZE = width * 0.72;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedTouch = Animated.createAnimatedComponent(
    TouchableWithoutFeedback,
);

const Fallback = () => (
    <View style={styles.fallback}>
        <Text>No Characters</Text>
    </View>
);

const BackButton = ({onPress, opacity, isOpen}: BackButtonProps) =>
    isOpen ? (
        <Animated.View style={{...styles.iconContainer, opacity}}>
            <Icon
                size={25}
                color="white"
                type="ionicon"
                name="arrow-undo"
                onPress={onPress}
                backgroundColor="white"
            />
        </Animated.View>
    ) : null;

const Backdrop = memo(({data, scrollX}: BackdropProps) => {
    const renderItem = ({item, index}: any) => {
        if (item.id === 11100 || item.id === 22200) {
            return <View style={{width: SPACER_ITEM_SIZE}} />;
        }

        const inputRange = [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE];
        const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width, 0],
        });
        const picture = `${item.thumbnail?.path}/portrait_uncanny.${item.thumbnail?.extension}`;

        return (
            <MaskedView
                key={`${item.id}`}
                style={{position: 'absolute'}}
                maskElement={
                    <AnimatedSvg
                        width={width}
                        height={height}
                        viewBox={`0 0 ${width} ${height}`}
                        style={{transform: [{translateX}]}}
                    >
                        <Rect
                            x="0"
                            y="0"
                            fill="red"
                            width={width}
                            height={height}
                        />
                    </AnimatedSvg>
                }
            >
                <Image source={{uri: picture}} style={styles.backdropImage} />
            </MaskedView>
        );
    };

    return (
        <View style={styles.backdropContainer}>
            <Animated.FlatList
                data={data}
                maxToRenderPerBatch={2}
                keyExtractor={useCallback(
                    (character: any, index) => `${character.id}-${index}`,
                    [],
                )}
                initialNumToRender={101}
                renderItem={renderItem}
                scrollEventThrottle={16}
            />
            <LinearGradient
                colors={['transparent', 'white']}
                style={styles.gradient}
            />
        </View>
    );
});

const CharacterItem = memo(
    ({scrollX, index, onPress, ...props}: CharacterItemProps) => {
        const picture = `${props.thumbnail?.path}/portrait_uncanny.${props.thumbnail?.extension}`;
        const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
        ];
        const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
        });

        return (
            <View style={{width: ITEM_SIZE}}>
                <AnimatedTouch
                    style={{
                        ...styles.itemContainer,
                        transform: [{translateY}],
                    }}
                    onPress={() => onPress(index)}
                >
                    <Image source={{uri: picture}} style={styles.image} />
                    <Text numberOfLines={1} style={styles.name}>
                        {props.name}
                    </Text>
                </AnimatedTouch>
            </View>
        );
    },
);

const CharacterInfo = memo(
    ({character, bottomSheetRef, isOpen}: CharacterInfoProps) => {
        const snapPoints = useMemo(() => ['50%'], []);

        if (!isOpen) {
            return null;
        }

        return (
            <BottomSheet
                animateOnMount
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                backgroundComponent={() => <View />}
            >
                <View style={{padding: 10}}>
                    <Text style={styles.title}>{character.name}</Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        contentContainerStyle={styles.characterInfoContainer}
                    >
                        <Text style={styles.characterDescription}>
                            {character.description}
                        </Text>
                        <Text style={styles.characterName}>
                            stories of {character.name}
                        </Text>
                        <View style={styles.characterStories}>
                            {character.stories?.items.map((item, index) => (
                                <Text
                                    key={`${item.name}-${index}`}
                                    style={{marginVertical: 5}}
                                    numberOfLines={1}
                                >
                                    {index + 1} - {item.name}
                                </Text>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </BottomSheet>
        );
    },
);

// Parent View Component
const CharactersView = memo(
    ({isLoading, characters}: CharacterGeneratedProps) => {
        const {isOpen, onOpen, onClose} = useToggle();
        const bottomSheetRef = useRef<BottomSheet>(null);
        const [activeIndex, setActiveIndex] = useState(0);
        const scrollX = useRef(new Animated.Value(0)).current;
        const opacity = useRef(new Animated.Value(0)).current;

        const fadeIn = useCallback(
            (selectedIndex: number) => {
                setActiveIndex(selectedIndex);
                onOpen();
                Animated.timing(opacity, {
                    toValue: 1,
                    delay: 100,
                    duration: 300,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }).start();
            },
            [opacity, onOpen],
        );

        const fadeOut = useCallback(
            () =>
                Animated.timing(opacity, {
                    toValue: 0,
                    delay: 100,
                    duration: 300,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }).start(() => onClose()),
            [opacity, onClose],
        );

        const onBackButtonPress = () => {
            fadeOut();
            bottomSheetRef.current?.close();
        };

        const renderItem = ({item, index}: {item: any; index: number}) => {
            if (item.id === 11100 || item.id === 22200) {
                return <View style={{width: SPACER_ITEM_SIZE}} />;
            }
            return (
                <CharacterItem
                    {...item}
                    index={index}
                    onPress={fadeIn}
                    scrollX={scrollX}
                />
            );
        };

        const character = (characters && characters[activeIndex]) || {};
        const keyExtractor = useCallback(({id}, index) => `${id}-${index}`, []);

        const onScroll = Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
        );

        const animatedListStyle: AnimatedListStyle = {
            zIndex: isOpen ? -10 : 10,
            position: isOpen ? 'absolute' : 'relative',
            opacity: opacity.interpolate({
                inputRange: [-1, 0],
                outputRange: [0, 1],
            }),
        };

        return (
            <View style={styles.mainContainer}>
                {isLoading ? (
                    <View style={styles.loader}>
                        <Text>Loading...</Text>
                    </View>
                ) : (
                    <View style={styles.mainContainer}>
                        <Backdrop data={characters || []} scrollX={scrollX} />
                        <BackButton
                            isOpen={isOpen}
                            opacity={opacity}
                            onPress={onBackButtonPress}
                        />
                        <CharacterInfo
                            isOpen={isOpen}
                            character={character}
                            bottomSheetRef={bottomSheetRef}
                        />
                        <Animated.FlatList
                            horizontal
                            bounces={false}
                            data={characters}
                            onScroll={onScroll}
                            decelerationRate={0}
                            renderItem={renderItem}
                            maxToRenderPerBatch={4}
                            scrollEventThrottle={16}
                            style={animatedListStyle}
                            snapToInterval={ITEM_SIZE}
                            keyExtractor={keyExtractor}
                            ListEmptyComponent={Fallback}
                            initialNumToRender={isOpen ? 0 : 1}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.listContainer}
                        />
                    </View>
                )}
            </View>
        );
    },
);

export default CharactersView;
