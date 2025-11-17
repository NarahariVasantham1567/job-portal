import './Settings.css';

import { GoPerson } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import { CiGlobe } from 'react-icons/ci';
import { IoSettingsOutline } from 'react-icons/io5';
import CompanyInfo from '../components/CompanyInfo/CompanyINfo';
import FoundingInfo from '../components/FoundingInfo/FoundingInfo';
import SocialMediaProfile from '../components/SocialMediaProfile/SocialMediaProfile';
import AccountSettings from '../components/AccountSettings/AccountSettings';

import { useState } from 'react';

const btns = [
  {
    id: 1,
    icon: <GoPerson />,
    content: 'Company Info',
    component: <CompanyInfo />,
  },
  {
    id: 2,
    icon: <CgProfile />,
    content: 'Founding Info',
    component: <FoundingInfo />,
  },
  {
    id: 3,
    icon: <CiGlobe />,
    content: 'Social Media Profile',
    component: <SocialMediaProfile />,
  },
  {
    id: 4,
    icon: <IoSettingsOutline />,
    content: 'Account Settings',
    component: <AccountSettings />,
  },
];

export default function Settings() {
  const [content, setContent] = useState(btns[0].component);

  const onButtonClick = (id) => {
    const item = btns.find((btn) => btn.id === id);
    setContent(item.component);
  };

  return (
    <div className='settings-container'>
      <h3 className='settings-heading'>Settings</h3>
      <div className='btn-container'>
        {btns.map((btn) => {
          return (
            <button
              key={btn.id}
              className='button'
              onClick={() => onButtonClick(btn.id)}
            >
              {btn.icon} {btn.content}
            </button>
          );
        })}
      </div>
      {content}
    </div>
  );
}
