import styled from 'styled-components';

export const UsersListItem = styled.li`
  position: relative;
  padding-top: 178px;
  padding-bottom: 36px;
  width: 380px;
  /* flex-basis: calc((100% - 60px) / 3); */
  background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const BGImg = styled.img`
  position: absolute;
  left: 36px;
  top: 28px;
`;

export const LineDecoration = styled.div`
  position: absolute;
  width: 100%;
  height: 8px;
  left: 0px;
  top: 214px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #ae7be3,
    inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-bottom: 26px;
  border-radius: 50%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.avatarimg});
  background-color: #5736a3;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06);
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 50%;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  color: #ebd8ff;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Button = styled.button`
  display: block;
  min-width: 196px;
  padding: 14px 28px;
  border-radius: 10.3px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 0px;
  margin-top: 26px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  background-color: #ebd8ff;
  color: #373737;
  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: #c26aff;
  }
`;

export const ButtonIsFollowing = styled.button`
  display: block;
  min-width: 196px;
  padding: 14px 28px;
  border-radius: 10.3px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 0px;
  margin-top: 26px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  background-color: #5cd3a8;
  color: #373737;
  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: #c26aff;
  }
`;
