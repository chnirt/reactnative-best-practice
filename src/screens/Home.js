import React, {Component, useEffect, useState, useContext} from 'react';
import {Text, StyleSheet, View, FlatList, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import firebase from 'firebase';

// posts = [
//   {
//     id: '1',
//     name: 'Joe McKay',
//     text:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     timestamp: 1569109273726,
//     avatar: require('../assets/avatar/image1.png'),
//     image: require('../assets/onboarding/image1.gif'),
//   },
//   {
//     id: '2',
//     name: 'Karyn Kim',
//     text:
//       'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     timestamp: 1569109273726,
//     avatar: require('../assets/avatar/image1.png'),
//     image: require('../assets/onboarding/image2.gif'),
//   },
//   {
//     id: '3',
//     name: 'Emerson Parsons',
//     text:
//       'Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.',
//     timestamp: 1569109273726,
//     avatar: require('../assets/avatar/image1.png'),
//     image: require('../assets/onboarding/image3.gif'),
//   },
//   {
//     id: '4',
//     name: 'Kathie Malone',
//     text:
//       'At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.',
//     timestamp: 1569109273726,
//     avatar: require('../assets/avatar/image1.png'),
//     image: require('../assets/onboarding/image1.gif'),
//   },
// ];

export default function HomeScreen() {
  const [posts, setPosts] = useState([]);

  let unsubscribe = null;

  useEffect(() => {
    unsubscribe = firebase
      .firestore()
      .collection('posts')
      .orderBy('timestamp', 'asc')
      .limit(100)
      .onSnapshot(
        snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }
          var returnArray = [];
          snapshot.forEach(function(doc) {
            const {id} = doc;
            returnArray.push({
              id,
              ...doc.data(),
              avatar: require('../assets/avatar/image1.png'),
            });
          });

          setPosts(returnArray);
        },
        err => {
          console.log(`Encountered error: ${err.code}`);
        },
      );

    return () => unsubscribe();
  });

  renderPost = post => {
    return (
      <View key={post.id} style={styles.feedItem}>
        <Image source={post.avatar} style={styles.avatar} />
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={styles.name}>{post.uid}</Text>
              <Text style={styles.timestamp}>
                {moment(post.timestamp).fromNow()}
              </Text>
            </View>

            <FontAwesome5 name="ellipsis-h" size={24} color="#73788B" />
          </View>
          <Text style={styles.post}>{post.text}</Text>
          <Image
            source={{uri: post.image}}
            style={styles.postImage}
            resizeMode="cover"
          />
          <View style={{flexDirection: 'row'}}>
            <FontAwesome5
              name="heart"
              size={24}
              color="#73788B"
              style={{marginRight: 16}}
            />
            <FontAwesome5 name="comments" size={24} color="#73788B" />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      <FlatList
        style={styles.feed}
        data={posts}
        renderItem={({item}) => renderPost(item)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EBECF4',
    shadowColor: '#454D65',
    shadowOffset: {height: 5},
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  feed: {
    marginHorizontal: 16,
  },
  feedItem: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 8,
    flexDirection: 'row',
    marginVertical: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: '#454D65',
  },
  timestamp: {
    fontSize: 11,
    color: '#C4C6CE',
    marginTop: 4,
  },
  post: {
    marginTop: 16,
    fontSize: 14,
    color: '#838899',
  },
  postImage: {
    width: undefined,
    height: 150,
    borderRadius: 5,
    marginVertical: 16,
  },
});
