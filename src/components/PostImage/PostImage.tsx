/* eslint-disable prettier/prettier */
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PostImage as PostImageTypes, RootStackParams} from '../../types';

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>;

const PostImage: FC<PostImageTypes> = ({title, date, url, explanation}) => {
  const {navigate} = useNavigation<PostImageNavigationProps>();

  const handleViewPress = () => {
    navigate('Detail', {title, date, url, explanation});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handleViewPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(18,39,113,255)',
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom:12,
    fontSize: 18,
  },
  date: {
    color: '#fff',
  },
  buttonContainer: {
    alignItems:'flex-end',
  },
});
export default PostImage;
