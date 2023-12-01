import {
  StyledLink,
  StyledNav,
  StyledHeader,
  ContainerStyled,
} from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <div>
      <StyledHeader>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/contacts">Contacts</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </StyledNav>
      </StyledHeader>
      <main>
        <ContainerStyled>{children}</ContainerStyled>
      </main>
    </div>
  );
};
