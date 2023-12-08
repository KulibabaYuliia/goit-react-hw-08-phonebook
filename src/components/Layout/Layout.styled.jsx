import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 20px;
  box-shadow: 0px 7px 8px -1px rgba(138, 131, 131, 0.75);
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 16px;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: blue;
  }

  &:hover {
    color: blue;
  }
`;

export const ContainerStyled = styled.div`
  padding: 20px;
`;
