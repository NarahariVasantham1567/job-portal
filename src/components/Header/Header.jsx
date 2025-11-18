import './Header.css';

import { PiBriefcaseBold } from 'react-icons/pi';
import { LuBellRing } from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='main-header'>
      <div className='main-container header'>
        <div className='bag-container'>
          <PiBriefcaseBold className='bag-icon' />
          <h3 className='heading'>MyJob</h3>
        </div>
        <div className='notification-container'>
          <LuBellRing />
          <button className='post-btn'>
            <Link to='/dashboard/post-job'>Post A Jobs</Link>
          </button>
          <div className='insta'>
            <FaInstagram className='insta-icon' />
          </div>
        </div>
      </div>
    </div>
  );
}
