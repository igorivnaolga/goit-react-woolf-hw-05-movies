import { StyledHeader } from 'components/Header/Header.styled';

const { default: Header } = require('components/Header/Header');
const { Outlet } = require('react-router-dom');

const MainLayout = () => {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default MainLayout;
