import './ProfileCard.css';

import { LuDownload } from 'react-icons/lu';

const ProfileCard = ({ id, name, role, experience, education, applied }) => {
  return (
    <div className='profile-card-container'>
      <div className='profile-details'>
        <div className='img-holder'></div>
        <div className='personel-details'>
          <h3 className='profile-name'>{name}</h3>
          <p className='profile-role'>{role}</p>
        </div>
      </div>
      <ul className='profile-list-container'>
        <li>{experience}</li>
        <li>Education: {education}</li>
        <li>Applied: {applied}</li>
      </ul>
      <div className='profile-download-container'>
        <LuDownload /> Download Cv
      </div>
    </div>
  );
};

export default ProfileCard;
