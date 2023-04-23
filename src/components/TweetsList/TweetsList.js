import TweetCard from 'components/TweetCard/TweetCard';
import { Item, List, Wrapper } from './TweetsList.styled';

const TweetsList = ({ users, onFollowClick }) => {
  return (
    <Wrapper>
      <List>
        {users.map(({ id, user, tweets, followers, avatar, isFollowing }) => (
          <Item key={id}>
            <TweetCard
              id={id}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              isFollowing={isFollowing}
              onFollowClick={() => onFollowClick(id, isFollowing)}
            />
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default TweetsList;
