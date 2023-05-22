import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect, useRef } from 'react';
import {
  UsersListItem,
  Logo,
  BGImg,
  LineDecoration,
  AvatarWrapper,
  Image,
  Text,
  Button,
  ButtonIsFollowing,
} from './User.styled';
import CardLogo from '../../images/Logo.svg';
import BackgroundImage from '../../images/bg-pic.svg';
import AvatarStroke from '../../images/avatar-stroke.svg';
import { formatNumber } from '../../utils/utils';
import { updateFollower } from '../../utils/api';

const User = ({ userInfo: { user, tweets, followers, avatar, id, isFollowingState } }) => {
  const [totalFollowers, setTotalFollowers] = useState(followers);

  const [isFollowing, setIsFollowing] = useState(isFollowingState);

  const notInitialRender = useRef(false);

  useEffect(() => {
    if (notInitialRender.current) {
      async function updateFollowersAmount() {
        try {
          await updateFollower(id, totalFollowers, isFollowing);
        } catch (error) {
          toast.error('You cannot following this user now. Please try it again later.');
        }
      }

      updateFollowersAmount();
    } else {
      notInitialRender.current = true;
      return;
    }
  }, [totalFollowers, id, isFollowing]);

  const handleOnClick = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setTotalFollowers(prevState => prevState - 1);
    } else {
      setIsFollowing(true);
      setTotalFollowers(prevState => prevState + 1);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <UsersListItem>
        <Logo src={CardLogo} alt="Logo" width="76" />
        <BGImg src={BackgroundImage} alt="Background image" width="308" />
        <LineDecoration></LineDecoration>
        <AvatarWrapper avatarimg={AvatarStroke}>
          <Image src={avatar} alt="User avatar" width="62" height="62" loading="lazy" />
        </AvatarWrapper>

        <Text> {user} </Text>
        <Text> {tweets} tweets</Text>
        <Text>{formatNumber(totalFollowers)} Followers</Text>
        {isFollowing ? (
          <ButtonIsFollowing type="button" onClick={handleOnClick}>
            Following
          </ButtonIsFollowing>
        ) : (
          <Button type="button" onClick={handleOnClick}>
            Follow
          </Button>
        )}
      </UsersListItem>
    </>
  );
};

export default User;

User.propTypes = {
  userInfo: PropTypes.shape({
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    isFollowingState: PropTypes.bool.isRequired,
  }).isRequired,
};
