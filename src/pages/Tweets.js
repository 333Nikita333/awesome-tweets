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
  const [selectedFilter, setSelectedFilter] = useState('show all');
  const [page, setPage] = useState(1);
  const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setIsLoadMoreVisible(false);

    fetchTweets(page)
      .then(newUsers => {
        console.log('users', newUsers);
        setUsers(prevUsers => [...prevUsers, ...newUsers]);
        setIsLoading(false);
        setIsLoadMoreVisible(true);
      })
      .catch(console.log);
  }, [page]);

  useEffect(() => {
    if (users.length === 12 && page !== 1) {
      setIsLoadMoreVisible(false);
    }
  }, [page, users.length]);

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
    setPage(prevPage => prevPage + 1);
  };

  const filterUsers = (users, selectedFilter) => {
    switch (selectedFilter) {
      case 'show all':
        return users;
      case 'follow':
        return users.filter(
          user => loadFromStorage(`tweet_${user.id}`) !== true
        );
      case 'followings':
        return users.filter(
          user => loadFromStorage(`tweet_${user.id}`) === true
        );
      default:
        return users;
    }
  };

  const filteredUsers = filterUsers(users, selectedFilter);

  return isLoading ? (
    <Loader />
  ) : (
    <Section>
      <BackLink to='/'>Go Home</BackLink>
      <DropDown value={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <TweetsList users={filteredUsers} onFollowClick={handleFollowClick} />
      {filteredUsers.length === 0 && <p>No subscriptions</p>}
      {isLoading && filteredUsers.length && Loader(page)}
      {isLoadMoreVisible && (
        <ButtonLoadMore onBtnLoadMore={onBtnLoadMore} disabled={isLoading} />
      )}
    </Section>
  );
};

export default Tweets;
