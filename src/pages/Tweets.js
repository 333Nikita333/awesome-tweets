import TweetsList from 'components/TweetsList';
import { useEffect, useState } from 'react';
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

  // обработчик события клика на кнопке follow
  const handleFollowClick = async (id, isFollowing) => {
    // создаем новый массив пользователей, чтобы не изменять стейт напрямую
    const updatedUsers = [...users];
    const userIndex = updatedUsers.findIndex(user => user.id === id);
    const user = updatedUsers[userIndex];
    // обновляем состояние пользователя и отправляем изменения на сервер
    if (isFollowing) {
      user.followers--;
      await updateFollowers(id, { followers: user.followers });
    } else {
      user.followers++;
      await updateFollowers(id, { followers: user.followers });
    }
    user.isFollowing = !isFollowing;
    updatedUsers[userIndex] = user;

    // обновляем стейт
    setUsers(updatedUsers);
  };

  return isLoading ? (
    <b>Loading...</b>
  ) : (
    <TweetsList users={users} onFollowClick={handleFollowClick} />
  );
};

export default Tweets;
