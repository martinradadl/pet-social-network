import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {PostsGrid} from '../components/posts/posts-grid';
import {COLORS} from '../global-styles';
import Icon from '@react-native-vector-icons/material-icons';

const FOOTER_HEIGHT = 60;
const HEADER_ICON_SIZE = 32;

export const AddPostScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="close"
          size={HEADER_ICON_SIZE}
          color={COLORS.PRIMARY_TEXT}
          onPress={() => {}}
        />
        <Text style={[styles.headerText, styles.title]}>Add Post</Text>
        <Text style={[styles.headerText, styles.next]}>Next</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.firstFile} />
        <PostsGrid
          numColumns={4}
          postsList={Array.from({length: 10}, (_, i) => ({
            id: i.toString(),
          }))}
        />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerOption}>
          <Text>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerOption}>
          <Text>Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerOption}>
          <Text>Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 10,
  },
  headerText: {fontSize: 24, fontWeight: 'bold'},
  title: {flex: 1},
  next: {color: COLORS.PRIMARY_BUTTON},
  content: {
    paddingBottom: FOOTER_HEIGHT,
  },
  firstFile: {width: '100%', aspectRatio: 1},
  footer: {
    height: FOOTER_HEIGHT,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: COLORS.SECONDARY_BUTTON,
  },
  footerOption: {
    flex: 1,
  },
});
