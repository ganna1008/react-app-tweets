import PropTypes from 'prop-types';
import User from '../User/User';
import { UsersListStyle } from './UsersList.styled';

const UsersList = ({ userCards }) => {
  return (
    <UsersListStyle>
      {userCards.map(user => {
        return <User key={user.id} userInfo={user} />;
      })}
    </UsersListStyle>
  );
};

export default UsersList;

UsersList.propTypes = {
  userCards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
