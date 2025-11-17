import './Sidebar.css';

import { RiStackLine } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { CiCirclePlus } from 'react-icons/ci';
import { BiBriefcase } from 'react-icons/bi';
import { RiFilePaperLine } from 'react-icons/ri';
import { BsLayoutTextWindowReverse } from 'react-icons/bs';
import { BsPersonVcard } from 'react-icons/bs';
import { FcSettings } from 'react-icons/fc';
import { FiLogOut } from 'react-icons/fi';

import { NavLink } from 'react-router-dom';

const arr = [
  {
    id: 1,
    icon: <RiStackLine />,
    content: 'Overview',
    href: 'overview',
  },
  {
    id: 2,
    icon: <CgProfile />,
    content: 'Employers Profile',
    href: 'employee-profile',
  },
  {
    id: 3,
    icon: <CiCirclePlus />,
    content: 'Post A Job',
    href: 'post-job',
  },
  {
    id: 4,
    icon: <BiBriefcase />,
    content: 'My Jobs',
    href: 'my-jobs',
  },
  {
    id: 5,
    icon: <RiFilePaperLine />,
    content: 'Saved Candidate',
    href: 'saved-candidate',
  },
  {
    id: 6,
    icon: <BsLayoutTextWindowReverse />,
    content: 'Plans & Billing',
    href: 'billings',
  },
  {
    id: 7,
    icon: <BsPersonVcard />,
    content: 'All Companies',
    href: 'all-companies',
  },
  {
    id: 8,
    icon: <FcSettings />,
    content: 'Settings',
    href: 'settings',
  },
];

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <h3 className='sidebar-heading'>EMPLOYERS DASHBOARD</h3>
      <div className='item-container'>
        {arr.map((item) => {
          return (
            <div key={item.id} className='item'>
              <NavLink to={item.href}>
                {item.icon} {item.content}
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className='item-container last-item'>
        <div className='item'>
          <NavLink to='logout'>
            <FiLogOut /> Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
}
