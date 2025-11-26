import { Outlet } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <div className='main-container'>
        <Outlet />
      </div>
    </>
  );
};

export default LandingPage;
