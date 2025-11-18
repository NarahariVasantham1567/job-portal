import './JobCard.css';

import { RxCrossCircled } from 'react-icons/rx';
import { BsCheckCircle } from 'react-icons/bs';
import { GoPerson } from 'react-icons/go';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { GoPlusCircle } from 'react-icons/go';
import { LuEye } from 'react-icons/lu';

import { useState } from 'react';

const JobCard = ({ role, status, type, noticePeriod, applications }) => {
  const [openBtn, setOpenBtn] = useState(false);

  return (
    <div className='job-card-container'>
      <div className='role-container'>
        <p className='role'>{role}</p>
        <div className='type-container'>
          <span>{type} .</span> <span>{noticePeriod}</span>
        </div>
      </div>
      <div className='status-application-container'>
        <div
          className={
            status === 'Active'
              ? 'status-container active-status'
              : 'status-container inactive-status'
          }
        >
          <span>
            {status === 'Active' ? <BsCheckCircle /> : <RxCrossCircled />}
          </span>{' '}
          <span>{status}</span>
        </div>
        <div className='application-container'>
          <span>
            <GoPerson />
          </span>{' '}
          <span>{applications} Applications</span>
        </div>
      </div>
      <div className='actions-container'>
        <button className='view-btn'>View Applications</button>
        <button className='burger-btn' onClick={() => setOpenBtn(!openBtn)}>
          <HiOutlineDotsVertical />
        </button>
      </div>
      {openBtn && (
        <div
          className={
            openBtn === true ? 'show-content display-content' : 'show-content'
          }
        >
          <div className='icon-container'>
            <span>
              <GoPlusCircle />
            </span>{' '}
            <span>Promote Job</span>
          </div>
          <div className='icon-container'>
            <span>
              <LuEye />
            </span>{' '}
            <span>View Detail</span>
          </div>
          <div className='icon-container'>
            <span>
              <RxCrossCircled />
            </span>{' '}
            <span>Make it Expire</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCard;
