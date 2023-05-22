import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

export const Button = ({ nextPage }) => {
  const handleOnClick = () => {
    nextPage();
  };
  return (
    <LoadButton type="button" onClick={handleOnClick}>
      Load more
    </LoadButton>
  );
};

Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};
