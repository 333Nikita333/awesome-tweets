import TweetCard from 'components/TweetCard/TweetCard';
import { Item, List, Wrapper } from './TweetsList.styled';

const TweetsList = ({ users }) => {
  return (
    <Wrapper>
      <List>
        {users.map(({ id, user, tweets, followers, avatar }) => (
          <Item key={id}>
            <TweetCard
              id={id}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
            />
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default TweetsList;
