const { NavLink } = require('react-router-dom');

const Header = () => {
  return (
    <nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
    </nav>
  );
};

export default Header;
