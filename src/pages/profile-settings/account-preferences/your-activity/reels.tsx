import {ScrollView, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenHeader} from '../../../../components/header';

export const UserReelsList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Reels" />
      <ScrollView>
        <Text>Content</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
