import { NavLink } from 'react-router-dom';
import { LuPhoneCall } from 'react-icons/lu';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <ul className='main-container links-container'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/find-candidate'>Find Candidate</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard/my-jobs'>My Jobs</NavLink>
        </li>
        <li>
          <NavLink to='/applications'>Applications</NavLink>
        </li>
        <li>
          <NavLink to='/customer-support'>Customer Supports</NavLink>
        </li>
      </ul>
      <div className='main-container country-container'>
        <div className='phone-container'>
          <LuPhoneCall />
          +1-202-555-0178
        </div>
        <select className='language-container'>
          <option className='option' value='eng'>
            English
          </option>
          <option className='option' value='ind'>
            Hindi
          </option>
          <option className='option' value='sp'>
            Spanish
          </option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
