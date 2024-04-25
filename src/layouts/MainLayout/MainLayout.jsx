const { default: Header } = require('components/Header/Header');
const { Outlet } = require('react-router-dom');

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
