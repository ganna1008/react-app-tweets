import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1236px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  padding-top: 30px;
`;

export const LoaderWrapper = styled.div`
  display: block;
  text-align: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #5736a3;
  }
`;

export const TextHome = styled.p`
  margin-top: 15px;
  font-size: 18px;
  line-height: 1.2;
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const HeaderHome = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const ImageHome = styled.img`
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
`;

export const Backlink = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
`;
