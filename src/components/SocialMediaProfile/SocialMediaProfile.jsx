import './SocialMediaProfile.css';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { ImCancelCircle } from 'react-icons/im';
import { IoAddCircleOutline } from 'react-icons/io5';

export default function SocialMediaProfile() {
  return (
    <div className='social-media-profile-container'>
      <div className='single-profile-container'>
        <label className='social-link-label'>Social Link 1</label>
        <div className='social-media-profile-input-container'>
          <div className='social-media-select-input-container'>
            <select className='social-media-select'>
              <option value='facebook'>Facebook</option>
              <option value='instagram'>
                <FaInstagram /> Instagram
              </option>
              <option value='youtube'>
                <FaYoutube /> Youtube
              </option>
              <option value='twitter'>
                <FiTwitter /> Twitter
              </option>
            </select>
            <input
              type='text'
              placeholder='Profile link/url...'
              className='select-input-profile'
            />
          </div>
          <div className='social-media-profile-btn-container'>
            <ImCancelCircle className='social-media-profile-cancel-icon' />
          </div>
        </div>
      </div>
      <div className='single-profile-container'>
        <label className='social-link-label'>Social Link 2</label>
        <div className='social-media-profile-input-container'>
          <div className='social-media-select-input-container'>
            <select className='social-media-select'>
              <option value='facebook'>Facebook</option>
              <option value='instagram'>
                <FaInstagram /> Instagram
              </option>
              <option value='youtube'>
                <FaYoutube /> Youtube
              </option>
              <option value='twitter'>
                <FiTwitter /> Twitter
              </option>
            </select>
            <input
              type='text'
              placeholder='Profile link/url...'
              className='select-input-profile'
            />
          </div>
          <div className='social-media-profile-btn-container'>
            <ImCancelCircle className='social-media-profile-cancel-icon' />
          </div>
        </div>
      </div>
      <div className='single-profile-container'>
        <label className='social-link-label'>Social Link 3</label>
        <div className='social-media-profile-input-container'>
          <div className='social-media-select-input-container'>
            <select className='social-media-select'>
              <option value='facebook'>Facebook</option>
              <option value='instagram'>
                <FaInstagram /> Instagram
              </option>
              <option value='youtube'>
                <FaYoutube /> Youtube
              </option>
              <option value='twitter'>
                <FiTwitter /> Twitter
              </option>
            </select>
            <input
              type='text'
              placeholder='Profile link/url...'
              className='select-input-profile'
            />
          </div>
          <div className='social-media-profile-btn-container'>
            <ImCancelCircle className='social-media-profile-cancel-icon' />
          </div>
        </div>
      </div>
      <div className='single-profile-container'>
        <label className='social-link-label'>Social Link 4</label>
        <div className='social-media-profile-input-container'>
          <div className='social-media-select-input-container'>
            <select className='social-media-select'>
              <option value='facebook'>Facebook</option>
              <option value='instagram'>
                <FaInstagram /> Instagram
              </option>
              <option value='youtube'>
                <FaYoutube /> Youtube
              </option>
              <option value='twitter'>
                <FiTwitter /> Twitter
              </option>
            </select>
            <input
              type='text'
              placeholder='Profile link/url...'
              className='select-input-profile'
            />
          </div>
          <div className='social-media-profile-btn-container'>
            <ImCancelCircle className='social-media-profile-cancel-icon' />
          </div>
        </div>
      </div>
      <div className='social-media-profile-add-btn'>
        <IoAddCircleOutline /> Add New Social Link
      </div>
      <button className='social-media-profile-save-btn'>Save Changes</button>
    </div>
  );
}
