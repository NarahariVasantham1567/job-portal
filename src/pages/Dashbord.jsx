import './Dashboard.css';

import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import SingleApplication from '../components/SingleApplication/SingleApplication';
import useModalContext from '../context/ModalContext';
import PromoteJobCard from '../components/PromoteJobCard/PromoteJobCard';

export default function DashboardPage() {
  const { openModal, openJobCard } = useModalContext();

  return (
    <>
      <div className='main-container dashboard-container'>
        <Sidebar />
        <Outlet />
      </div>
      {openModal && <SingleApplication />}
      {openJobCard && <PromoteJobCard />}
    </>
  );
}
