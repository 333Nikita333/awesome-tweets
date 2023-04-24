import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { loadFromStorage, saveToStorage } from 'services/storage';
import { fetchTweets, updateFollowers } from 'services/tweetsAPI';
import BackLink from 'components/BackLink';
import TweetsList from 'components/TweetsList';
import ButtonLoadMore from 'components/ButtonLoadMore';
import Loader from 'components/Loader';
import DropDown from 'components/DropDown';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  font-size: 18px;
`;

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numberVisibleUsers, setNumberVisibleUsers] = useState(3);
  const [selectedFilter, setSelectedFilter] = useState('show all');

  useEffect(() => {
    setIsLoading(true);

    fetchTweets()
      .then(users => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch(console.log);
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
    saveToStorage(`tweet_${userId}`, isFollowing ? false : true);
  };

  const onBtnLoadMore = () => {
    setNumberVisibleUsers(prevVisibleUsers => prevVisibleUsers + 3);
  };

  const filterUsers = (users, selectedFilter) => {
    switch (selectedFilter) {
      case 'show all':
        return users;
      case 'follow':
        return users.filter(
          user => loadFromStorage(`tweet_${user.id}`) !== true
        );
      case 'following':
        return users.filter(
          user => loadFromStorage(`tweet_${user.id}`) === true
        );
      default:
        return users;
    }
  };

  const isBtnLoadMoreVisible = numberVisibleUsers < users.length;
  const filteredUsers = filterUsers(users, selectedFilter);
  const displayedUsers = filteredUsers.slice(0, numberVisibleUsers);

  return isLoading ? (
    <Loader />
  ) : (
    <Section>
      {' '}
      <BackLink to='/'>Go Home</BackLink>
      <DropDown value={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <TweetsList users={displayedUsers} onFollowClick={handleFollowClick} />
      {displayedUsers.length === 0 && <p>No subscriptions</p>}
      {isBtnLoadMoreVisible && <ButtonLoadMore onBtnLoadMore={onBtnLoadMore} />}
    </Section>
  );
};

export default Tweets;
