/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useMemo, useRef, useState} from 'react';
import {height, width} from 'constants/theme';
import {View, Text, Animated, StyleSheet, Platform, Easing} from 'react-native';
import {Icon, Image} from 'react-native-elements';
import {Character} from 'types/characters';
import {CharacterGeneratedProps} from './Characters.props';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Rect} from 'react-native-svg';
import {useToggle} from 'utils/useToggle';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

const ITEM_SIZE = width * 0.72;
const SPACING = 10;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.6;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedTouch = Animated.createAnimatedComponent(
    TouchableWithoutFeedback,
);

const Fallback = () => (
    <View style={styles.fallback}>
        <Text>No Characters</Text>
    </View>
);

const BackButton = ({
    onPress,
    opacity,
}: {
    onPress: () => void;
    opacity: Animated.Value;
}) => (
    <Animated.View style={{...styles.iconContainer, opacity}}>
        <Icon
            type="ionicon"
            name="arrow-undo"
            size={25}
            color="white"
            backgroundColor="white"
            onPress={onPress}
        />
    </Animated.View>
);

const Backdrop = memo(
    ({
        data,
        scrollX,
    }: {
        data: Array<Partial<Character>>;
        scrollX: Animated.Value;
    }) => {
        const renderItem = ({item, index}: {item: any; index: number}) => {
            if (item.id === 11100 || item.id === 22200) {
                return <View style={{width: SPACER_ITEM_SIZE}} />;
            }
            const inputRange = [
                (index - 2) * ITEM_SIZE,
                (index - 1) * ITEM_SIZE,
            ];
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
                                width={width}
                                height={height}
                                fill="red"
                            />
                        </AnimatedSvg>
                    }
                >
                    <Image
                        source={{uri: picture}}
                        style={styles.backdropImage}
                    />
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
    },
);

const CharacterItem = memo(
    ({
        scrollX,
        index,
        onPress,
        ...props
    }: Partial<Character> & {
        scrollX: Animated.Value;
        index: number;
        onPress: (index: number) => void;
    }) => {
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
    ({
        character,
        bottomSheetRef,
    }: {
        character: Partial<Character>;
        bottomSheetRef: React.RefObject<BottomSheetMethods>;
    }) => {
        const snapPoints = useMemo(() => ['50%'], []);
        return (
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                animateOnMount
                backgroundComponent={() => <View />}
            >
                <View style={{padding: 10}}>
                    <Text style={styles.title}>{character.name}</Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                        contentContainerStyle={{
                            paddingBottom: 30,
                            marginTop: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: 'black',
                                fontSize: 14,
                                marginTop: 30,
                            }}
                        >
                            {character.description}
                        </Text>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: 'black',
                                fontSize: 18,
                                marginTop: 30,
                            }}
                        >
                            stories of {character.name}
                        </Text>
                        <View
                            style={{
                                flex: 1,
                                marginHorizontal: 10,
                                marginTop: 5,
                            }}
                        >
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

const CharactersView = memo(
    ({isLoading, characters}: CharacterGeneratedProps) => {
        const [activeIndex, setActiveIndex] = useState(0);
        const scrollX = useRef(new Animated.Value(0)).current;
        const opacity = useRef(new Animated.Value(0)).current;
        const bottomSheetRef = useRef<BottomSheet>(null);
        const {isOpen, onOpen, onClose} = useToggle();

        const fadeIn = useCallback(
            (selectedIndex: number) => {
                setActiveIndex(selectedIndex);
                onOpen();
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 300,
                    delay: 100,
                    useNativeDriver: true,
                    easing: Easing.ease,
                }).start();
            },
            [opacity, onOpen],
        );

        const fadeOut = useCallback(
            () =>
                Animated.timing(opacity, {
                    toValue: 0,
                    useNativeDriver: true,
                    delay: 100,
                    duration: 300,
                    easing: Easing.ease,
                }).start(() => onClose()),
            [opacity, onClose],
        );

        const renderItem = ({item, index}: {item: any; index: number}) => {
            if (item.id === 11100 || item.id === 22200) {
                return <View style={{width: SPACER_ITEM_SIZE}} />;
            }
            return (
                <CharacterItem
                    {...item}
                    scrollX={scrollX}
                    index={index}
                    onPress={fadeIn}
                />
            );
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
                        {isOpen && (
                            <BackButton
                                onPress={() => {
                                    fadeOut();
                                    bottomSheetRef.current?.close();
                                }}
                                opacity={opacity}
                            />
                        )}
                        {isOpen && (
                            <CharacterInfo
                                character={
                                    (characters && characters[activeIndex]) ||
                                    {}
                                }
                                bottomSheetRef={bottomSheetRef}
                            />
                        )}
                        <Animated.FlatList
                            data={characters}
                            keyExtractor={(character: any, index) =>
                                `${character.id}-${index}`
                            }
                            bounces={false}
                            horizontal
                            maxToRenderPerBatch={4}
                            initialNumToRender={isOpen ? 0 : 1}
                            contentContainerStyle={styles.listContainer}
                            style={{
                                zIndex: isOpen ? -10 : 10,
                                position: isOpen ? 'absolute' : 'relative',
                                opacity: opacity.interpolate({
                                    inputRange: [-1, 0],
                                    outputRange: [0, 1],
                                }),
                            }}
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={16}
                            snapToInterval={ITEM_SIZE}
                            decelerationRate={0}
                            onScroll={Animated.event(
                                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                                {useNativeDriver: true},
                            )}
                            ListEmptyComponent={Fallback}
                            renderItem={renderItem}
                        />
                    </View>
                )}
            </View>
        );
    },
);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    listContainer: {
        alignItems: 'center',
    },
    itemContainer: {
        marginHorizontal: SPACING,
        padding: SPACING * 1.5,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
    },
    image: {
        width: ITEM_SIZE * 0.8,
        height: ITEM_SIZE * 1.2,
        resizeMode: 'contain',
        borderRadius: 34,
    },
    fallback: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backdropImage: {
        width,
        height: BACKDROP_HEIGHT,
        resizeMode: 'cover',
    },
    gradient: {
        width,
        height: BACKDROP_HEIGHT,
        position: 'absolute',
        bottom: 0,
    },
    backdropContainer: {
        position: 'absolute',
        width,
        height: BACKDROP_HEIGHT,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        maxWidth: '80%',
        paddingHorizontal: SPACING,
        textAlign: 'center',
        marginVertical: SPACING,
    },
    iconContainer: {
        position: 'absolute',
        top: Platform.select({ios: 35, android: 25}),
        left: Platform.select({ios: 10, android: 15}),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        backgroundColor: 'black',
        padding: 10,
        zIndex: 20,
    },
    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textShadowRadius: 5,
        textShadowColor: 'white',
        textDecorationStyle: 'solid',
    },
    infoContainer: {
        position: 'absolute',
        left: 10,
        right: 10,
    },
});

export default CharactersView;
