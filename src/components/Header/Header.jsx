import './Header.css';

import { PiBriefcaseBold } from 'react-icons/pi';
import { LuBellRing } from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa6';

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
          <button className='post-btn'>Post A Jobs</button>
          <div className='insta'>
            <FaInstagram className='insta-icon' />
          </div>
        </div>
      </div>
    </div>
  );
}
