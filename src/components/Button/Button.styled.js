import styled from 'styled-components';

export const LoadButton = styled.button`
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

  background-color: #5736a3;
  color: #ebd8ff;
  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: #ebd8ff;
    color: #373737;
  }
`;
