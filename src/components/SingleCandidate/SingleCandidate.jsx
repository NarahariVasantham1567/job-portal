import './SingleCandidate.css';

import { BsBookmarkFill } from 'react-icons/bs';
import { FaArrowRightLong } from 'react-icons/fa6';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LuDownload } from 'react-icons/lu';

const SingleCandidate = ({
  id,
  name,
  img,
  role,
  isOpen,
  showHamberger,
  setShowHamberger,
  onShowHamberger,
}) => {
  return (
    <div className='single-candidate-container'>
      <div className='candidate-details-container'>
        <div className='image-container'></div>
        <div className='info-container'>
          <p className='name'>{name}</p>
          <p className='role'>{role}</p>
        </div>
      </div>
      <div className='candidate-info'>
        <BsBookmarkFill className='bookfill-icon' />
        <button className='view-profile-btn'>
          View Profile <FaArrowRightLong className='right-icon' />
        </button>
        <button
          className='burger-btn'
          onClick={() => {
            onShowHamberger(id);
            // setShowHamberger(!showHamberger);
          }}
        >
          <HiOutlineDotsVertical />
        </button>
      </div>
      <div
        className={
          isOpen
            ? 'download-email-container display-email-container'
            : 'download-email-container'
        }
      >
        <div className='email'>
          <MdOutlineMailOutline /> Send Email
        </div>
        <div className='download'>
          <LuDownload /> Download Cv
        </div>
      </div>
    </div>
  );
};

export default SingleCandidate;
