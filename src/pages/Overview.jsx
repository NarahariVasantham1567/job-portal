import { useState } from 'react';
import './Overview.css';

import { HiDotsHorizontal } from 'react-icons/hi';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GoPlusCircle } from 'react-icons/go';

import ProfileCard from '../components/ProfileCard/ProfileCard';

const applicationsData = [
  {
    id: 1,
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    experience: '7 Years Experience',
    education: 'Master Degree',
    applied: 'Jan 23, 2022',
  },
  {
    id: 2,
    name: 'Theresa Webb',
    role: 'Product Designer',
    experience: '7 Years Experience',
    education: 'High School Degree',
    applied: 'Jan 23, 2022',
  },
  {
    id: 3,
    name: 'Devon Lane',
    role: 'User Experience Designer',
    experience: '7 Years Experience',
    education: 'Master Degree',
    applied: 'Jan 23, 2022',
  },
  {
    id: 4,
    name: 'Kathryn Murphy',
    role: 'Front End Engineer',
    experience: '7 Years Experience',
    education: 'Master Degree',
    applied: 'Jan 23, 2022',
  },
];

const shortlistedData = [
  {
    id: 1,
    name: 'Darren Sammy',
    role: 'UI/UX Designer',
    experience: '7 Years Experience',
    education: 'Master Degree',
    applied: 'Jan 23, 2022',
  },
  {
    id: 2,
    name: 'Jenny Wilson',
    role: 'UI Designer',
    experience: '7 Years Experience',
    education: 'High School Degree',
    applied: 'Jan 23, 2022',
  },
];

const Overview = () => {
  const [isSort, setIsSort] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  return (
    <div className='overview-container'>
      <p className='bread-crums'>
        Home / Job / Senior UI/UX Designer /{' '}
        <span className='application'>Applications</span>
      </p>
      <div className='filter-sort-container'>
        <h3 className='application-header'>Job Applications</h3>
        <div className='filter-sort-btn-container'>
          <button className='filter-btn'>Filter</button>
          <button className='sort-btn' onClick={() => setIsSort(!isSort)}>
            Sort
          </button>
          {isSort && (
            <div
              className={
                isSort
                  ? 'checkbox-container display-checkbox-container'
                  : 'checkbox-container'
              }
            >
              <p className='application-heading'>Sort Application</p>
              <div className='radio-container'>
                <input type='radio' name='sort' />
                <label className='label-input'>Newest</label>
              </div>
              <div className='radio-container'>
                <input type='radio' name='sort' />
                <label className='label-input'>Oldest</label>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='application-shortlisted-container'>
        <div className='all-application-container'>
          <div className='application-count'>
            <p>All Applications (213)</p>
            <HiDotsHorizontal
              className='dots-icon'
              onClick={() => setIsEditable(!isEditable)}
            />
          </div>
          <div
            className={
              isEditable
                ? 'edit-delete-container display-edit-delete-container'
                : 'edit-delete-container'
            }
          >
            <div className='edit-icon-container'>
              <AiOutlineEdit /> Edit Column
            </div>
            <div className='delete-icon-container'>
              <RiDeleteBinLine /> Delete
            </div>
          </div>
          {applicationsData.map((item) => (
            <ProfileCard key={item.id} {...item} />
          ))}
        </div>
        <div className='shortlisted-container'>
          <div className='application-count'>
            <p>Shortlisted (2)</p>
            <HiDotsHorizontal
              className='dots-icon'
              onClick={() => setIsEditable(!isEditable)}
            />
          </div>
          <div
            className={
              isEditable
                ? 'edit-delete-container display-edit-delete-container'
                : 'edit-delete-container'
            }
          >
            <div className='edit-icon-container'>
              <AiOutlineEdit /> Edit Column
            </div>
            <div className='delete-icon-container'>
              <RiDeleteBinLine /> Delete
            </div>
          </div>
          {shortlistedData.map((item) => (
            <ProfileCard key={item.id} {...item} />
          ))}
        </div>
        <div className='create-container'>
          <GoPlusCircle className='plus-icon' /> Create
        </div>
      </div>
    </div>
  );
};

export default Overview;
