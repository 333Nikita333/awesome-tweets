import TweetsList from 'components/TweetsList';
import { useEffect, useState } from 'react';
import { fetchTweets } from 'services/tweetsAPI';

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

  return isLoading ? <b>Loading...</b> : <TweetsList users={users} />;
};

export default Tweets;
