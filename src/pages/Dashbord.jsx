import './Dashboard.css';

import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import SingleApplication from '../components/SingleApplication/SingleApplication';
import { useState } from 'react';
import useModalContext from '../context/ModalContext';

export default function DashboardPage() {
  const { openModal } = useModalContext();

  return (
    <>
      <div className='main-container dashboard-container'>
        <Sidebar />
        <Outlet />
      </div>
      {openModal && <SingleApplication />}
    </>
  );
}
