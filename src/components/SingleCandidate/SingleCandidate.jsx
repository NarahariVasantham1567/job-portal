import './SingleCandidate.css';

import { BsBookmarkFill } from 'react-icons/bs';
import { FaArrowRightLong } from 'react-icons/fa6';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { LuDownload } from 'react-icons/lu';
import useModalContext from '../../context/ModalContext';

const SingleCandidate = ({ id, name, img, role, isOpen, onShowHamberger }) => {
  const { setOpenModal } = useModalContext();

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
        <button className='view-profile-btn' onClick={() => setOpenModal(true)}>
          View Profile <FaArrowRightLong className='right-icon' />
        </button>
        <button className='burger-btn' onClick={() => onShowHamberger(id)}>
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
