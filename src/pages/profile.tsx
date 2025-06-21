import {useRef} from 'react';
import {
  Animated,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';

const HEADER_HEIGHT = 50;

export const Profile = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const headerTranslateAnim = diffClampScrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  const username = 'username';
  const postsCount = 8;
  const followersCount = 88;
  const followingCount = 102;
  const name = 'Real Name';
  const bio = 'this is a bio';

  return (
    <SafeAreaView style={styles.container}>
      <Icon name="lock-outline" size={32} color="#900" />
      <Animated.View
        style={[
          styles.header,
          {transform: [{translateY: headerTranslateAnim}]},
        ]}>
        <Text style={styles.title}>{username}</Text>
        <Icon name="add-box" size={32} color="#900" />
        <Icon name="menu" size={32} color="#900" />
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{paddingTop: HEADER_HEIGHT}}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}>
        <View style={styles.overview}>
          <View style={styles.userPhoto} />
          <View style={styles.counter}>
            <Text style={styles.counterValue}>{postsCount}</Text>
            <Text style={styles.counterLabel}>posts</Text>
          </View>
          <View style={styles.counter}>
            <Text style={styles.counterValue}>{followersCount}</Text>
            <Text style={styles.counterLabel}>followers</Text>
          </View>
          <View style={styles.counter}>
            <Text style={styles.counterValue}>{followingCount}</Text>
            <Text style={styles.counterLabel}>following</Text>
          </View>
        </View>

        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>

        <View style={styles.options}>
          <Button title="Edit profile" />
          <Button title="Share profile" />
        </View>

        <View style={styles.tabs}>
          <Icon name="apps" size={32} color="#900" />
          <Icon name="autorenew" size={32} color="#900" />
          <Icon name="portrait" size={32} color="#900" />
        </View>
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
    paddingHorizontal: 12,
  },
  title: {fontSize: 28, flex: 1, fontWeight: 'bold'},
  overview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  userPhoto: {
    height: 72,
    width: 72,
    borderRadius: 9999999,
    backgroundColor: 'red',
  },
  counter: {gap: 4},
  counterValue: {fontSize: 24, fontWeight: 'bold'},
  counterLabel: {fontSize: 20},
  name: {fontSize: 20, fontWeight: 'bold'},
  bio: {fontSize: 20},
  options: {flexDirection: 'row', gap: 4},
  tabs: {flexDirection: 'row', justifyContent: 'space-around'},
});
