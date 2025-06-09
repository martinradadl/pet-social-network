import {Text, View} from 'react-native';
import {postStyles as styles} from './styles';
import Icon from '@react-native-vector-icons/material-icons';

export const Post = () => {
  const username = 'username';
  const likesCount = 3;
  const commentsCount = 6;
  const sentsCount = 0;
  const description = 'post description';
  const date = '30 minutes ago';

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.userProfilePic} />
        <Text style={styles.username}>{username}</Text>
        <Icon name="more-vert" size={20} color="#900" />
      </View>
      <View style={styles.files} />
      <View style={styles.options}>
        <View style={styles.mainOptions}>
          <View style={styles.option}>
            <Icon name="favorite-border" size={20} color="#900" />
            <Text style={styles.count}>
              {likesCount > 0 ? likesCount : null}
            </Text>
          </View>
          <View style={styles.option}>
            <Icon name="comment" size={20} color="#900" />
            <Text style={styles.count}>
              {commentsCount > 0 ? commentsCount : null}
            </Text>
          </View>
          <View style={styles.option}>
            <Icon name="chat-bubble-outline" size={20} color="#900" />
            <Text style={styles.count}>
              {sentsCount > 0 ? sentsCount : null}
            </Text>
          </View>
        </View>
        <Icon name="bookmark-border" size={20} color="#900" />
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};
