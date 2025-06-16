import {StyleSheet} from 'react-native';

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
    borderRadius: 9999999,
    backgroundColor: 'red',
  },
  username: {flex: 1, fontSize: 20},
  files: {
    height: 240,
    backgroundColor: 'red',
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
  date: {fontSize: 18, color: 'gray', paddingHorizontal: 8},
  usernameOnDescription: {fontWeight: 'bold'},
});

export const footerStyles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    paddingVertical: 4,
    justifyContent: 'space-around',
  },
});
