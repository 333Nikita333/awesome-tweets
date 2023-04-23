import { loadFromStorage } from 'services/storage';
import {
  Avatar,
  AvatarBox,
  Button,
  Card,
  FollowersNumber,
  TweetsNumber,
  UserInfoBox,
} from './TweetCard.styled';

const TweetCard = ({ id, avatar, tweets, followers, onFollowClick }) => {
  const isFollowing = loadFromStorage(`tweets_${id}`) === true;

  const handleFollowClick = () => {
    onFollowClick(id, isFollowing);
  };

  // const buttonColor = isFollowed ? '#5CD3A8' : '#EBD8FF';
  // const buttonText = isFollowed ? 'Following' : 'Follow';

  return (
    <Card>
      <AvatarBox>
        <Avatar src='/images/avatar.png' alt={avatar} />
      </AvatarBox>
      <UserInfoBox>
        <TweetsNumber>{tweets} tweets</TweetsNumber>
        <FollowersNumber>{followers} Followers</FollowersNumber>
      </UserInfoBox>
      <Button
        type='button'
        onClick={handleFollowClick}
        style={{ backgroundColor: isFollowing ? '#5CD3A8' : '#EBD8FF' }}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </Card>
  );
};

export default TweetCard;
