import {ScrollView, StyleSheet} from 'react-native';
import {StoryIcon} from '../home/story-icon';

export const StoriesCarousel = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.followedUsersStories}>
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
      <StoryIcon />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  followedUsersStories: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingVertical: 12,
    gap: 16,
  },
});
