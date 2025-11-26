import './About.css';

import { PiBriefcase } from 'react-icons/pi';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { GoPerson } from 'react-icons/go';

export default function AboutPage() {
  return (
    <div className='about-parent-container'>
      <div className='about-child-header-container'>
        <div className='about-header-container'>
          <p>About Us</p>
          <p className='home-text'>Home / About us</p>
        </div>
      </div>
      <div className='about-content-container'>
        <div className='about-us-container'>
          <p className='about-text'>Who we are</p>
          <h3 className='about-us-heading'>
            We're highly skilled and professionals team.
          </h3>
          <p className='about-us-text'>
            prasent non sem facilisis, hendrerit nisi vitae, volutpat quam.
            Aliquam metus mauris, semper eu eros vitae, blandit tristique metus.
            Vestibulum maximus nec justo sed maximus.
          </p>
        </div>
        <div className='about-company-container'>
          <div className='about-img-content-container'>
            <div className='about-logo-container'>
              <PiBriefcase className='about-briefcase-logo' />
            </div>
            <div className='about-content'>
              <p className='about-count'>1,75,324</p>
              <p className='about-job'>Live Job</p>
            </div>
          </div>
          <div className='about-img-content-container'>
            <div className='logo-container'>
              <HiOutlineBuildingOffice2 className='about-briefcase-logo' />
            </div>
            <div className='about-content'>
              <p className='about-count'>97,354</p>
              <p className='about-job'>Companies</p>
            </div>
          </div>
          <div className='about-img-content-container'>
            <div className='logo-container'>
              <GoPerson className='about-briefcase-logo' />
            </div>
            <div className='about-content'>
              <p className='about-count'>38,47,154</p>
              <p className='about-job'>Candidates</p>
            </div>
          </div>
        </div>
      </div>
      <div className='logos-container'>
        <div className='logos-image-container'>
          <img
            src='/company-logos.png'
            alt='company logos'
            className='company-logo'
          />
        </div>
      </div>
      <div className='about-img-container'>
        <img src='/img.png' alt='image' className='about-img-logo' />
      </div>
      <div className='about-us-mission-container'>
        <div className='our-mission-content-container'>
          <p className='about-text'>Our mission</p>
          <h3 className='about-us-heading'>
            Our mission is to help people to find the perfect job.
          </h3>
          <p className='about-us-text'>
            prasent non sem facilisis, hendrerit nisi vitae, volutpat quam.
            Aliquam metus mauris, semper eu eros vitae, blandit tristique metus.
            Vestibulum maximus nec justo sed maximus.
          </p>
        </div>
        <div className='our-mission-image-container'>
          <img src='/img2.png' alt='image' />
        </div>
      </div>
      <div className='candidate-employer-container'>
        <div className='about-candidate-container'>
          <h3 className='candidate-header'>Become a Candidate</h3>
          <p className='candidate-text'>
            Crass in massa pellentesque, mollis, ligula non, luctus dui. Morbi
            sed efficitur dolor. Pelque augue risus, aliqu.
          </p>
          <button className='register-btn'>Register Now</button>
        </div>
        <div className='about-employer-container'>
          <h3 className='candidate-header'>Become a Candidate</h3>
          <p className='employer-text'>
            Crass in massa pellentesque, mollis, ligula non, luctus dui. Morbi
            sed efficitur dolor. Pelque augue risus, aliqu.
          </p>
          <button className='register-btn'>Register Now</button>
        </div>
      </div>
    </div>
  );
}
