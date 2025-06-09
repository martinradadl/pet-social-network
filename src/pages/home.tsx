import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import {StoryIcon} from '../components/home/story-icon';
import Icon from '@react-native-vector-icons/material-icons';
import {useRef} from 'react';
import {Post} from '../components/post';

const HEADER_HEIGHT = 40;

export const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const headerTranslateAnim = diffClampScrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {transform: [{translateY: headerTranslateAnim}]},
        ]}>
        <Text style={styles.title}>Petgram</Text>
        <Icon name="favorite-border" size={32} color="#900" />
        <Icon name="chat-bubble-outline" size={32} color="#900" />
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{paddingTop: HEADER_HEIGHT}}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
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

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    zIndex: 1000,
    elevation: 4,
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 6,
  },
  title: {fontSize: 32, flex: 1},
  followedUsersStories: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingVertical: 4,
    gap: 16,
  },
});
