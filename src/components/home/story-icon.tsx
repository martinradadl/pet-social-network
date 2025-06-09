import {Text, View} from 'react-native';
import {storyIconStyles as styles} from './styles';

export const StoryIcon = () => {
  const username = 'username';

  return (
    <View style={styles.container}>
      <View style={styles.userPhoto} />
      <Text style={styles.username}> {username} </Text>
    </View>
  );
};
