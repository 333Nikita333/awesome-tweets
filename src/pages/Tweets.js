import { useEffect, useState } from 'react';
import { saveToStorage } from 'services/storage';
import { fetchTweets, updateFollowers } from 'services/tweetsAPI';
import BackLink from 'components/BackLink';
import TweetsList from 'components/TweetsList';
import ButtonLoadMore from 'components/ButtonLoadMore';
import Loader from 'components/Loader';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numberVisibleUsers, setNumberVisibleUsers] = useState(3);

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

  const onBtnLoadMore = () => {
    setNumberVisibleUsers(prevVisibleUsers => prevVisibleUsers + 3);
  };

  const isBtnLoadMoreVisible = numberVisibleUsers < users.length;
  const displayedUsers = users.slice(0, numberVisibleUsers);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {' '}
      <BackLink to='/'>Go back</BackLink>
      <TweetsList users={displayedUsers} onFollowClick={handleFollowClick} />
      {isBtnLoadMoreVisible && <ButtonLoadMore onBtnLoadMore={onBtnLoadMore} />}
    </>
  );
};

export default Tweets;
