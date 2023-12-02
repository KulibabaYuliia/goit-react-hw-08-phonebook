import {
  StyledLink,
  StyledNav,
  StyledHeader,
  ContainerStyled,
} from './Layout.styled';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/auth.selectors';

export const Layout = ({ children }) => {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <div>
      <StyledHeader>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          {authenticated && <StyledLink to="/contacts">Contacts</StyledLink>}
          {authenticated && <StyledLink to="/usermenu">User Menu</StyledLink>}

          {!authenticated && <StyledLink to="/login">Login</StyledLink>}
          {!authenticated && <StyledLink to="/register">Register</StyledLink>}
        </StyledNav>
      </StyledHeader>
      <main>
        <ContainerStyled>{children}</ContainerStyled>
      </main>
    </div>
  );
};
