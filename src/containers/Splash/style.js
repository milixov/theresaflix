import THEME from '../../style';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: THEME.DIMEN.SCREEN_HEIGHT,
        backgroundColor: THEME.COLOR.BG_DARK,
    },
    text: {
        color: THEME.COLOR.PRIMARY,
        fontWeight: 'bold',
        fontSize: 28,
    },
});
