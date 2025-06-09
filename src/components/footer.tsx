import {View} from 'react-native';
import {footerStyles as styles} from './styles';
import Icon from '@react-native-vector-icons/material-icons';

export const Footer = () => {
  return (
    <View>
      <View style={styles.options}>
        <Icon name="home-filled" size={20} color="#900" />
        <Icon name="search" size={20} color="#900" />
        <Icon name="add-box" size={20} color="#900" />
        <Icon name="video-collection" size={20} color="#900" />
        <Icon name="account-circle" size={20} color="#900" />
      </View>
    </View>
  );
};
