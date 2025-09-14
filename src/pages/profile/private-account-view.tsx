import Icon from '@react-native-vector-icons/material-icons';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../global-styles';

export const PrivateAccountView = () => {
  return (
    <View style={styles.container}>
      <Icon name="lock-outline" size={48} color={COLORS.PRIMARY_TEXT} />
      <Text style={styles.title}>This account is private</Text>
      <Text style={styles.description}>
        Follow this account to see their photos and videos
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12},
  title: {fontSize: 32, fontWeight: 'bold'},
  description: {fontSize: 20},
});
