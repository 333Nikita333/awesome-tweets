import TweetsList from 'components/TweetsList';
import { useEffect, useState } from 'react';
import { saveToStorage } from 'services/storage';
import { fetchTweets, updateFollowers } from 'services/tweetsAPI';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchTweets()
      .then(users => {
        console.log(users);
        setUsers(users);
        setIsLoading(false);
      })
      .catch(error => console.log('error', error.message));
  }, []);

  const handleFollowClick = (userId, isFollowing) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        const updatedUser = {
          ...user,
          followers: user.followers + (isFollowing ? -1 : 1),
        };
        updateFollowers(user.id, { followers: updatedUser.followers });
        return updatedUser;
      }
      return user;
    });
    setUsers(updatedUsers);

    const keyStorage = `tweets_${userId}`;
    saveToStorage(keyStorage, isFollowing ? false : true);
  };

  return isLoading ? (
    <b>Loading...</b>
  ) : (
    <TweetsList users={users} onFollowClick={handleFollowClick} />
  );
};

export default Tweets;
