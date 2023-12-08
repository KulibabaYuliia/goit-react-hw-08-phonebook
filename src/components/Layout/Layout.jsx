import { AppBar, Box, Toolbar } from '@mui/material';
import { ContainerStyled, StyledLink, StyledNav } from './Layout.styled';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/auth.selectors';

export const Layout = ({ children }) => {
  const authenticated = useSelector(selectAuthenticated);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <StyledNav>
              <StyledLink to="/">Home</StyledLink>
              {authenticated && (
                <StyledLink to="/contacts">Contacts</StyledLink>
              )}
              {authenticated && (
                <StyledLink to="/usermenu">User Menu</StyledLink>
              )}
              {!authenticated && <StyledLink to="/login">Login</StyledLink>}
              {!authenticated && (
                <StyledLink to="/register">Register</StyledLink>
              )}
            </StyledNav>
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        <ContainerStyled>{children}</ContainerStyled>
      </main>
    </div>
  );
};
