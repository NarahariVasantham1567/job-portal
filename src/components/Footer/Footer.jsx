import './Footer.css';

import { PiBriefcaseBold } from 'react-icons/pi';
import { FaArrowRight } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-parent-container'>
      <div className='footer-container'>
        <div className='myjob-container'>
          <div className='myjob-icon'>
            <PiBriefcaseBold className='brief-case-icon' />
            <p className='job-heading'>MyJob</p>
          </div>
          <div className='contact'>
            <span className='call-now-text'>Call now:</span>{' '}
            <span className='mobile-num'>(319) 555-0115</span>
          </div>
          <p className='address'>
            6391 Elgin St. Celina, Delaware 10299, New York, United States of
            America
          </p>
        </div>
        <div className='quick-link-container'>
          <h4 className='link-header'>Quick Link</h4>
          <ul>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/billings'>Pricing</NavLink>
            </li>
            <li>
              <NavLink to='*'>Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className='quick-link-container'>
          <h4 className='link-header'>Candidate</h4>
          <ul>
            <li>
              <NavLink to='/dashboard/my-jobs'>Browse Jobs</NavLink>
            </li>
            <li>
              <NavLink to='/find-candidate'>Browse Employers</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard'>Candidate Dashboard</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/saved-candidate'>Saved Jobs</NavLink>
            </li>
          </ul>
        </div>
        <div className='quick-link-container'>
          <h4 className='link-header'>Employers</h4>
          <ul>
            <li>
              <NavLink to='/dashboard/post-job'>Post A Job</NavLink>
            </li>
            <li>
              <NavLink to='/find-candidate'>Browse Candidates</NavLink>
            </li>
            <li>
              <NavLink to='*'>Employers Dashboard</NavLink>
            </li>
            <li>
              <NavLink to='/applications'>Applications</NavLink>
            </li>
          </ul>
        </div>
        <div className='quick-link-container'>
          <h4 className='link-header'>Support</h4>
          <ul>
            <li>
              <NavLink to='/faqs'>Faqs</NavLink>
            </li>
            <li>
              <NavLink to='*'>Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to='terms-conditions'>Terms & Conditions</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
