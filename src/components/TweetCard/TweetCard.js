import {
  Avatar,
  AvatarBox,
  Button,
  Card,
  FollowersNumber,
  TweetsNumber,
  UserInfoBox,
} from './TweetCard.styled';

const TweetCard = ({
  avatar,
  tweets,
  followers,
  isFollowing,
  onFollowClick,
}) => {
  const buttonStyle = {
    backgroundColor: isFollowing ? '#5CD3A8' : '#EBD8FF',
  };

  const buttonText = isFollowing ? 'Following' : 'Follow';
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
      <Button type='button' onClick={onFollowClick} style={buttonStyle}>
        {buttonText}
      </Button>
    </Card>
  );
};

export default TweetCard;
