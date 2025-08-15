import {StyleSheet} from 'react-native';
import {COLORS} from '../../global-styles';

export const storyIconStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 6,
  },
  userPhoto: {
    height: 72,
    width: 72,
    borderRadius: '50%',
    backgroundColor: COLORS.SECONDARY_BUTTON,
  },
  username: {fontSize: 16},
});
