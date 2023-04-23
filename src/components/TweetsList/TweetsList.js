import TweetCard from 'components/TweetCard/TweetCard';
import { Item, List, Wrapper } from './TweetsList.styled';

const TweetsList = ({ users, onFollowClick }) => {

  return (
    <Wrapper>
      <List>
        {users.map(({ id, tweets, followers, avatar }) => (
          <Item key={id}>
            <TweetCard
              id={id}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              onFollowClick={onFollowClick}
            />
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default TweetsList;
