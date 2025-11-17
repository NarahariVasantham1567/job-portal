import './AccountSettings.css';

import { RxCross2 } from 'react-icons/rx';

export default function AccountSettings() {
  return (
    <div className='account-setting-container'>
      <form className='form'>
        <div className='form-element-container'>
          <label className='label'>Map Location</label>
          <input type='text' className='input-field' />
        </div>
        <div className='form-element-container'>
          <label className='label'>Phone</label>
          <input
            type='text'
            className='input-field'
            placeholder='Phone Number'
          />
        </div>
        <div className='form-element-container'>
          <label className='label'>Email</label>
          <input
            type='text'
            className='input-field'
            placeholder='Email address'
          />
        </div>
        <button className='save-btn'>Save Changes</button>
      </form>
      <div className='password'>
        <label className='label'>Change Password</label>
        <div className='password-container'>
          <div>
            <label className='label'>Current Password</label>
            <input type='text' placeholder='Password' className='input-field' />
          </div>
          <div>
            <label className='label'>New Password</label>
            <input type='text' placeholder='Password' className='input-field' />
          </div>
          <div>
            <label className='label'>Confirm Password</label>
            <input type='text' placeholder='Password' className='input-field' />
          </div>
        </div>
        <button className='password-btn'>Change Password</button>
      </div>
      <div className='delete-company'>
        <p>Delete Your Company</p>
        <p className='description'>
          If you delete your jobpilot account, you will no longer be able to get
          information about the matched jobs, following employees, and job
          alert, shortlisted jobs and more. You will be abondoned from all the
          services of jobpilot.com.
        </p>
        <button className='delete-btn'>
          <RxCross2 className='cross-icon' /> Close Account
        </button>
      </div>
    </div>
  );
}
