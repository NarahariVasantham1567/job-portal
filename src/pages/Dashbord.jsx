import './Dashboard.css';

import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

export default function DashboardPage() {
  return (
    <div className='main-container dashboard-container'>
      <Sidebar />
      <Outlet />
    </div>
  );
}
