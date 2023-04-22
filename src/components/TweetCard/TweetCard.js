import {
  Avatar,
  AvatarBox,
  Button,
  Card,
  FollowersNumber,
  TweetsNumber,
  UserInfoBox,
} from './TweetCard.styled';

const TweetCard = ({ avatar, tweets, followers }) => {
  return (
    <Card>
      <AvatarBox>
        <Avatar src='/images/avatar.png' alt={avatar} />
      </AvatarBox>
      <UserInfoBox>
        <TweetsNumber>{tweets} tweets</TweetsNumber>
        <FollowersNumber>{followers} Followers</FollowersNumber>
      </UserInfoBox>
      <Button type='button'>Follow</Button>
    </Card>
  );
};
export default TweetCard;
