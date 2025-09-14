import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {COLORS} from '../../global-styles';
import React from 'react';

type PostI = {
  id: string;
};

type PostsGridProps = {
  numColumns: number;
  postsList: PostI[];
  profileInfo?: React.ReactNode;
  tabsInfo?: React.ReactNode;
  emptyListView?: React.ReactNode;
};

export const PostsGrid = ({
  numColumns,
  postsList,
  profileInfo,
  tabsInfo,
  emptyListView,
}: PostsGridProps) => {
  const screenWidth = Dimensions.get('window').width;
  const itemSize = screenWidth / numColumns;

  const renderItem = () => (
    <View style={[styles.item, {width: itemSize, height: itemSize}]} />
  );

  return (
    <FlatList
      data={postsList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          {profileInfo && <View>{profileInfo}</View>} {/* index 0 */}
          {tabsInfo && <View>{tabsInfo}</View>} {/* index 1 */}
        </>
      }
      stickyHeaderIndices={tabsInfo ? [profileInfo ? 1 : 0] : []}
      ListEmptyComponent={() => emptyListView}
      contentContainerStyle={styles.contentContainerStyle}
      // important on Android for sticky headers to appear correctly
      removeClippedSubviews={false}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.SECONDARY_BUTTON,
    margin: 1,
  },
  contentContainerStyle: {flexGrow: 1},
});
