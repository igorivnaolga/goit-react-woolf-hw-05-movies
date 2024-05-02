import { StyledList, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <StyledList>
      <li>
        <StyledNavLink to="/">Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </li>
    </StyledList>
  );
};

export default Header;
