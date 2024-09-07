
import { View, Text, SafeAreaView, ScrollView, Pressable, FlatList, Dimensions, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import UserStory from './UserStory';
import Userpost from './Userpost';

const Home = ({ title }) => {
  const data = [
    { firstName: 'Joseph', id: 1 },
    { firstName: 'Angel', id: 2 },
    { firstName: 'White', id: 3 },
    { firstName: 'Joseph', id: 4 },
    { firstName: 'Angel', id: 5 },
    { firstName: 'White', id: 6 },
    { firstName: 'Joseph', id: 7 },
    { firstName: 'Angel', id: 8 },
    { firstName: 'White', id: 9 },
  ];

  const posts = [
    {
      firstName: 'alison',
      lastName: 'becker',
      location: 'tongi, gazipura sataish',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'alison',
      lastName: 'becker',
      location: 'tongi, gazipura sataish',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 2,
    },
    {
      firstName: 'alison',
      lastName: 'becker',
      location: 'tongi, gazipura sataish',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 3,
    },
    {
      firstName: 'alison',
      lastName: 'becker',
      location: 'tongi, gazipura sataish',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 4,
    },
  ];

  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [pageNumberpost, setPageNumberpost] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingposts, setIsLoadingposts] = useState(false);
  const [renderData, setRenderData] = useState(data.slice(0, pageSize));
  const [renderDatapost, setRenderDatapost] = useState(posts.slice(0, pageSize));
  const [screendata, setScreenData] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const handleDimensionChange = ({ screen }) => setScreenData(screen);

    Dimensions.addEventListener('change', handleDimensionChange);

    return () => {
      Dimensions.removeEventListener('change', handleDimensionChange);
    };
  }, []);

  const pagination = (data, pageNumber, pageSize) => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex >= data.length) {
      return [];
    }
    return data.slice(startIndex, startIndex + pageSize);
  };

  const loadMoreData = () => {
    if (!isLoading) {
      setIsLoading(true);
      const newPageNumber = pageNumber + 1;
      const newData = pagination(data, newPageNumber, pageSize);
      if (newData.length > 0) {
        setRenderData(prev => [...prev, ...newData]);
        setPageNumber(newPageNumber);
      }
      setIsLoading(false);
    }
  };

  const loadMoreData1 = () => {
    if (!isLoadingposts) {
      setIsLoadingposts(true);
      const newPageNumber = pageNumberpost + 1;
      const newData = pagination(posts, newPageNumber, pageSize);
      if (newData.length > 0) {
        setRenderDatapost(prev => [...prev, ...newData]);
        setPageNumberpost(newPageNumber);
      }
      setIsLoadingposts(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Pressable style={styles.iconContainer}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.icon} size={32} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.userStoryContainer}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={loadMoreData}
            data={renderData}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => <UserStory firstName={item.firstName} />}
          />
        </View>
        <View style={styles.postsContainer}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={loadMoreData1}
            showsVerticalScrollIndicator={false}
            data={renderDatapost}
            renderItem={({ item }) => (
              <Userpost
                firstName={item.firstName}
                lastName={item.lastName}
                comments={item.comments}
                likes={item.likes}
                bookmarks={item.bookmarks}
                location={item.location}
              />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingLeft: 17,
    paddingRight: 26,
  },
  title: {
    fontSize: 30,
  },
  iconContainer: {
    backgroundColor: '#898DAE',
    padding: 12,
    borderRadius: 100,
    position: 'relative',
  },
  icon: {
    color: 'white',
  },
  badge: {
    width: 20,
    height: 20,
    backgroundColor: 'pink',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 9,
    top: -5,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 10,
    color: 'white',
  },
  userStoryContainer: {
    paddingHorizontal: 28,
    height: 100,
  },
  postsContainer: {
    marginTop: 30,
    paddingHorizontal: 24,
  },
});

export default Home;

