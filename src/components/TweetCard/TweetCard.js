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
  const isFollowing = loadFromStorage(`tweets_${id}`) === true;

  const handleFollowClick = () => {
    onFollowClick(id, isFollowing);
  };

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
        isFollowing={isFollowing}
      >
        <ButtonText isFollowing={isFollowing}>
          {isFollowing ? 'Following' : 'Follow'}
        </ButtonText>
      </Button>
    </Card>
  );
};

export default TweetCard;
