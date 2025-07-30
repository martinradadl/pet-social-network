import {StyleSheet} from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    gap: 10,
  },
  title: {fontSize: 40, marginBottom: 20, textAlign: 'center'},
  message: {fontSize: 20, textAlign: 'center'},
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
    marginTop: 10,
    paddingVertical: 10,
    width: '100%',
    borderRadius: 6,
    backgroundColor: '#3897F0',
  },
  submitButtonText: {fontSize: 20, color: 'white', marginHorizontal: 'auto'},
  loginRedirectButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: '#3897F0',
  },
  additionalOption: {fontSize: 16},
  boldText: {fontWeight: 'bold'},
});
