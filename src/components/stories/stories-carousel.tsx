import {ScrollView, StyleSheet} from 'react-native';
import {StoryIcon} from '../home/story-icon';

type StoryI = {
  id: string;
};

type StoriesCarouselProps = {
  storiesList: StoryI[];
};

export const StoriesCarousel = (props: StoriesCarouselProps) => {
  const {storiesList} = props;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.followedUsersStories}>
      {(storiesList || []).map(story => (
        <StoryIcon key={story.id} />
      ))}
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
