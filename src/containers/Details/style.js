import THEME from '../../style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    loading: {
        paddingVertical: 8,
        marginHorizontal: 16,
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: THEME.DIMEN.SCREEN_WIDTH,
        height: THEME.DIMEN.SCREEN_WIDTH,
    },
    container: {
        padding: THEME.DIMEN.SCREEN_PADDING,
    },
    title: {
        fontSize: 24,
    },
    desc: {
        marginVertical: 16,
    },
    statistics: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    divider: {
        width: 1,
        height: 30,
        backgroundColor: 'lightgray',
        marginVertical: 16,
    },
    label: {
        color: 'gray',
    },
    value: {
        fontSize: 18,
    },
    tagWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    tag: {
        color: 'white',
        backgroundColor: 'gray',
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 4,
        marginRight: 4,
    },
});
