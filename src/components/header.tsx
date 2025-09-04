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

export const ScreenHeader = (props: HeaderProps) => {
  const HEADER_ICON_SIZE = 32;
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.header}>
      <Icon
        name="arrow-back"
        size={HEADER_ICON_SIZE}
        color={COLORS.PRIMARY_TEXT}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.title}>{props.title}</Text>
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
