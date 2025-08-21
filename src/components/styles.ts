import {StyleSheet} from 'react-native';
import {COLORS} from '../global-styles';

export const postStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    gap: 8,
  },
  userProfilePic: {
    height: 40,
    width: 40,
    borderRadius: '50%',
    backgroundColor: COLORS.SECONDARY_BUTTON,
  },
  username: {flex: 1, fontSize: 20},
  files: {
    height: 240,
    backgroundColor: COLORS.SECONDARY_BUTTON,
  },
  options: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  mainOptions: {
    flexDirection: 'row',
    gap: 4,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  count: {
    fontSize: 20,
  },
  description: {fontSize: 20, paddingHorizontal: 8},
  date: {fontSize: 16, color: COLORS.LABEL_TEXT, paddingHorizontal: 8},
  usernameOnDescription: {fontWeight: 'bold'},
});
