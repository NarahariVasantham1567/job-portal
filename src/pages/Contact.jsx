import './Contact.css';

import { LiaTelegramPlane } from 'react-icons/lia';
import { MdMailOutline } from 'react-icons/md';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-header-container'>
        <div className='contact-nav-container'>
          <p>Contact</p>
          <p className='home-text'>Home / Contact</p>
        </div>
      </div>
      <div className='contact-child-container'>
        <div className='contact-form-container'>
          <div className='contact-info-container'>
            <p className='contact-text'>Who we are</p>
            <h2 className='contact-heading'>We care about customer services</h2>
            <p className='contact-description'>
              Want to chat? We'd love to hear from you! Get in touch with our
              Customer Success Team to inquire about speaking events,
              advertising rates, or just say hello.
            </p>
            <button className='email-btn'>Email Support</button>
          </div>
          <div className='contact-form'>
            <h2 className='contact-form-heading'>Get in touch</h2>
            <div className='name-email-field-container'>
              <input
                type='text'
                placeholder='Name'
                className='input-text-field'
              />
              <input
                type='text'
                placeholder='Email'
                className='input-text-field'
              />
            </div>
            <input
              type='text'
              placeholder='Subjects'
              className='subject-field'
            />
            <textarea
              rows={5}
              className='msg-text-area'
              placeholder='Message'
            ></textarea>
            <button className='send-msg-btn'>
              Send Message{' '}
              <span>
                <LiaTelegramPlane />
              </span>
            </button>
          </div>
        </div>
        <div className='google-map-container'>
          <img className='google-img' src='/GoogleMap.jpeg' alt='google-map' />
        </div>
        <div className='mail-container'>
          <div className='mail-input-container'>
            <div className='email-input-field'>
              <input
                type='text'
                placeholder={`✉️ Email Address`}
                className='email-input-text'
              />
              <button className='subscribe-btn'>Subscribe</button>
            </div>
            <div className='numbers-container'>
              <div className='live-job-container'>
                <h3 className='count'>1,75,324</h3>
                <p className='company-count'>Live Job</p>
              </div>
              <div className='live-job-container'>
                <h3 className='count'>97,354</h3>
                <p className='company-count'>Companies</p>
              </div>
              <div className='live-job-container'>
                <h3 className='count'>38,47,154</h3>
                <p className='company-count'>Candidates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
