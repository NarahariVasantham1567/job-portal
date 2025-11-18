import './SavedCandidate.css';

import { BsExclamationCircle } from 'react-icons/bs';
import SingleCandidate from '../components/SingleCandidate/SingleCandidate';
import { useState } from 'react';

const candidates = [
  {
    id: 1,
    name: 'Guy Hawkins',
    img: '',
    role: 'Technical Support Specialist',
    isOpen: false,
  },
  {
    id: 2,
    name: 'Jacob Jones',
    img: '',
    role: 'Product Designer',
    isOpen: false,
  },
  {
    id: 3,
    name: 'Cameron Williamson',
    img: '',
    role: 'Marketing Officer',
    isOpen: false,
  },
  {
    id: 4,
    name: 'Robert Fox',
    img: '',
    role: 'Marketing Manager',
    isOpen: false,
  },
  {
    id: 5,
    name: 'kathyrn Murphy',
    img: '',
    role: 'Junior Graphic Designer',
    isOpen: false,
  },
  {
    id: 6,
    name: 'Darlene Robertson',
    img: '',
    role: 'Visual Designer',
    isOpen: false,
  },
  {
    id: 7,
    name: 'Kristin Watson',
    img: '',
    role: 'Senior UX Designer',
    isOpen: false,
  },
  {
    id: 8,
    name: 'Jenny Wilson',
    img: '',
    role: 'Interaction Designer',
    isOpen: false,
  },
  {
    id: 9,
    name: 'Marvin Mckenney',
    img: '',
    role: 'Networking Engineer',
    isOpen: false,
  },
  {
    id: 10,
    name: 'Theressa Web',
    img: '',
    role: 'Software Engineer',
    isOpen: false,
  },
];

const SavedCandidate = () => {
  const [data, setData] = useState(candidates);
  const [showHamberger, setShowHamberger] = useState(false);

  const onShowHamberger = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className='saved-candidate-container'>
      <div className='header-container'>
        <h3>Saved Candidates</h3>
        <div>
          <span className='icon'>
            <BsExclamationCircle />
          </span>
          <span className='info'>
            All of the candidates are visible until 24 march, 2021.
          </span>
        </div>
      </div>
      {data.map((candidate) => (
        <SingleCandidate
          key={candidate.id}
          {...candidate}
          setShowHamberger={setShowHamberger}
          showHamberger={showHamberger}
          onShowHamberger={onShowHamberger}
        />
      ))}
    </div>
  );
};

export default SavedCandidate;
