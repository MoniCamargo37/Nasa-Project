/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {PostImage as PostImageTypes} from '../../types';
import PostImage from '../PostImage';

const LastFiveDaysImages: FC<{postImages?: PostImageTypes[]}> = ({
  postImages,
}) => {
    console.log(postImages);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last five days </Text>
      <ScrollView style={styles.content}>
        {postImages?.map(postImage => (
          <PostImage key={`post-image-${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 18,
  },
});

export default LastFiveDaysImages;