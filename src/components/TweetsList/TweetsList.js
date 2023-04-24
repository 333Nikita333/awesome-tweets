import PropTypes from 'prop-types';
import TweetCard from 'components/TweetCard';
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

TweetsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object.isRequired),
  onFollowClick: PropTypes.func.isRequired,
};

export default TweetsList;
