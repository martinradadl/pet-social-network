import Icon from '@react-native-vector-icons/material-icons';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../global-styles';

type EmptyListViewProps = {
  isOwnPostsList: boolean;
};

export const EmptyListView = (props: EmptyListViewProps) => {
  const icon = props.isOwnPostsList ? 'camera-alt' : 'portrait';

  return (
    <View style={styles.container}>
      <Icon name={icon} size={48} color={COLORS.PRIMARY_TEXT} />
      <Text style={styles.title}>No Posts Yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12},
  title: {fontSize: 32, fontWeight: 'bold'},
});
