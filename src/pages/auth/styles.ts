import {StyleSheet} from 'react-native';
import {COLORS} from '../../global-styles';

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
  formItem: {width: '100%'},
  wrapperForTooltip: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  formInput: {
    minHeight: 40,
    borderRadius: 6,
    backgroundColor: COLORS.BACKGROUND,
    borderWidth: 1,
    borderColor: COLORS.INPUT,
    color: COLORS.PRIMARY_TEXT,
    paddingHorizontal: 8,
  },
  formInputWithTooltip: {flex: 1},
  formInputWithoutTooltip: {marginRight: 24},
  tooltipText: {
    position: 'absolute',
    top: 44,
    left: 0,
    right: 0,
    maxWidth: '92%',
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 6,
    elevation: 4, // shadow on Android
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    zIndex: 1000,
  },
  tooltipIcon: {
    width: 24,
    fontSize: 26,
  },
  formInputError: {
    paddingLeft: 4,
    color: COLORS.ERROR,
    fontSize: 10,
    marginBottom: -4,
  },
  submitButton: {
    marginTop: 10,
    paddingVertical: 10,
    width: '100%',
    borderRadius: 6,
    backgroundColor: COLORS.PRIMARY_BUTTON,
  },
  submitButtonText: {
    fontSize: 20,
    color: COLORS.SECONDARY_TEXT,
    marginHorizontal: 'auto',
  },
  loginRedirectButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: COLORS.PRIMARY_BUTTON,
  },
  additionalOption: {fontSize: 16},
  boldText: {fontWeight: 'bold'},
});
