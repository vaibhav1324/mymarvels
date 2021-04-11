import {height, width} from 'constants/theme';
import {Platform, StyleSheet} from 'react-native';

const ITEM_SIZE = width * 0.72;
const SPACING = 10;
const BACKDROP_HEIGHT = height * 0.6;

export const styles = StyleSheet.create({
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
    characterDescription: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 14,
        marginTop: 30,
    },
    characterInfoContainer: {
        paddingBottom: 30,
        marginTop: 10,
    },
    characterName: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        marginTop: 30,
    },
    characterStories: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 5,
    },
});
