import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenHeader} from '../components/header';
import {ScrollView, StyleSheet} from 'react-native';
import {PostsList} from '../components/posts/posts-list';

export const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Posts" />
      <ScrollView contentContainerStyle={styles.content}>
        <PostsList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    paddingVertical: 10,
  },
});
