import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import {COLORS} from '../../global-styles';
import {ProfileOptionsIcon} from './options-list';
import {YourActivityOptionsIcon} from './account-preferences/your-activity/options-list';

type ProfileOptionProps = {
  icon?: ProfileOptionsIcon | YourActivityOptionsIcon;
  label: string;
  onPress: () => void;
  hasWarningLabel?: boolean;
};

const OPTIONS_ICON_SIZE = 34;

export const ProfileOption = (props: ProfileOptionProps) => {
  const {label, onPress, icon, hasWarningLabel} = props;

  return (
    <TouchableOpacity style={styles.optionsItem} onPress={onPress}>
      {icon ? (
        <Icon
          name={icon}
          size={OPTIONS_ICON_SIZE}
          color={COLORS.PRIMARY_TEXT}
        />
      ) : null}
      <Text
        style={{
          ...styles.optionsLabel,
          ...(hasWarningLabel ? styles.warningLabel : null),
        }}>
        {label}
      </Text>
      <Icon
        name="keyboard-arrow-right"
        size={OPTIONS_ICON_SIZE}
        color={COLORS.SECONDARY_BUTTON}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionsItem: {
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optionsLabel: {
    flex: 1,
    fontSize: 18,
  },
  warningLabel: {color: COLORS.ERROR},
});
