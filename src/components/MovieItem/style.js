import THEME from '../../style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        borderRadius: 8,
        backgroundColor: THEME.COLOR.WHITE,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textWrapper: {
        padding: THEME.DIMEN.SCREEN_PADDING,
        flexShrink: 0,
    },
    title: {
        fontSize: 18,
        maxWidth: 200,
    },
    rate: {
        marginTop: 8,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: THEME.COLOR.ORANGE,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    image: {
        width: 100,
        height: '100%',
        maxWidth: 100,
        flexGrow: 1,
    },
});
