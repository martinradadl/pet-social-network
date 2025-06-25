import {StyleSheet} from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  title: {fontSize: 40},
  formInput: {
    height: 40,
    width: '100%',
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#B3B9BD',
    color: '#000000',
    paddingHorizontal: 8,
  },
  submitButton: {
    height: 44,
    width: '100%',
    borderRadius: 6,
    backgroundColor: '#3897F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {fontSize: 20, color: 'white'},
  additionalOption: {fontSize: 16},
  formSpacer: {
    height: 10,
  },
  submitSpacer: {
    height: 20,
  },
  titleSpacer: {
    height: 30,
  },
  boldText: {fontWeight: 'bold'},
});
