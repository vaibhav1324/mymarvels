import BottomSheet from '@gorhom/bottom-sheet';
import {height, width} from 'constants/theme';
import React, {memo, useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {Image} from 'react-native-elements';
import {Comics} from 'types/comics';
import {ComicsGeneratedProps} from './Comics.props';

const SPACING = 10;
const ITEM_SIZE = height * 0.75;

const Comic = memo(
    ({
        index,
        scrollX,
        ...props
    }: Partial<Comics> & {index: number; scrollX: Animated.Value}) => {
        const picture = `${props.thumbnail?.path}/portrait_uncanny.${props.thumbnail?.extension}`;
        const bottomSheetRef = useRef<BottomSheet>(null);
        const snapPoints = useMemo(() => ['25%', '70%'], []);

        return (
            <View style={styles.itemContainer}>
                <Image source={{uri: picture}} style={styles.image} />
                <BottomSheet
                    ref={bottomSheetRef}
                    snapPoints={snapPoints}
                    animateOnMount
                >
                    <View style={styles.bottomSheet}>
                        <Text numberOfLines={1} style={styles.title}>
                            {props.title}
                        </Text>
                        <Text style={styles.createdBy}>Created By:</Text>
                        <View style={styles.authorContainer}>
                            {props.creators?.items.map((item, index) => (
                                <Text key={`${index}`} style={styles.creator}>
                                    {item.name}
                                    {props.creators?.items.length === index + 1
                                        ? '.'
                                        : ','}
                                </Text>
                            ))}
                        </View>
                    </View>
                </BottomSheet>
            </View>
        );
    },
);

const ComicsView = ({isLoading, comics}: ComicsGeneratedProps) => {
    const scrollX = useRef(new Animated.Value(0)).current;

    const keyExtractor = useCallback((item) => `${item.id}`, []);
    return (
        <View style={{...styles.mainContainer}}>
            <View style={styles.listContainer}>
                {!isLoading ? (
                    <Animated.FlatList
                        data={comics}
                        horizontal
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        scrollEventThrottle={16}
                        keyExtractor={keyExtractor}
                        renderItem={({item, index}) => (
                            <Comic {...item} index={index} scrollX={scrollX} />
                        )}
                    />
                ) : (
                    <Text>Loading...</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    listContainer: {
        flex: 1,
    },
    itemContainer: {
        width: width,
        alignItems: 'center',
    },
    image: {
        resizeMode: 'stretch',
        height: ITEM_SIZE,
        width,
        alignSelf: 'center',
    },
    bottomSheet: {
        flex: 1,
        paddingHorizontal: SPACING,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        fontWeight: '600',
        marginVertical: SPACING,
    },
    createdBy: {
        marginRight: 5,
        marginTop: 20,
        fontSize: 16,
        fontWeight: '700',
    },
    authorContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
    },
    creator: {
        fontWeight: '600',
        marginRight: 5,
        fontSize: 14,
    },
});

export default ComicsView;
