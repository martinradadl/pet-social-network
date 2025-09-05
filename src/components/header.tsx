import Icon from '@react-native-vector-icons/material-icons';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../global-styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackScreensList} from '../main-router';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  title: string;
};

type NavigationProp = NativeStackNavigationProp<
  RootStackScreensList,
  'ProfileRouter'
>;

const HEADER_ICON_SIZE = 32;

export const ScreenHeader = (props: HeaderProps) => {
  const navigation = useNavigation<NavigationProp>();
  const {title} = props;

  return (
    <View style={styles.header}>
      <Icon
        name="arrow-back"
        size={HEADER_ICON_SIZE}
        color={COLORS.PRIMARY_TEXT}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 10,
  },
  title: {fontSize: 24, flex: 1, fontWeight: 'bold'},
});
