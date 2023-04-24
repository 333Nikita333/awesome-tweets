import PropTypes from 'prop-types';
import { loadFromStorage } from 'services/storage';
import {
  Avatar,
  AvatarBox,
  Button,
  ButtonText,
  Card,
  FollowersNumber,
  TweetsNumber,
  UserInfoBox,
} from './TweetCard.styled';

const TweetCard = ({ id, avatar, tweets, followers, onFollowClick }) => {
  const isFollowing = loadFromStorage(`tweet_${id}`) === true;

  const handleFollowClick = () => {
    onFollowClick(id, isFollowing);
  };

  return (
    <Card>
      <AvatarBox>
        <Avatar width={62} height={62} src={avatar} alt='user avatar' />
      </AvatarBox>
      <UserInfoBox>
        <TweetsNumber>{tweets} tweets</TweetsNumber>
        <FollowersNumber>{followers} Followers</FollowersNumber>
      </UserInfoBox>
      <Button
        type='button'
        onClick={handleFollowClick}
        isFollowing={isFollowing}
      >
        <ButtonText isFollowing={isFollowing}>
          {isFollowing ? 'Following' : 'Follow'}
        </ButtonText>
      </Button>
    </Card>
  );
};

TweetCard.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  onFollowClick: PropTypes.func.isRequired,
};

export default TweetCard;
