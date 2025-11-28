import './AllCompanies.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

const AllCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchCompanies = async () => {
    try {
      const { data } = await axios.get(
        'https://jobportal-application-1.onrender.com/api/company'
      );
      setCompanies(data);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div className='all-companies-container'>
      <h1>All Companies Page</h1>
    </div>
  );
};

export default AllCompanies;
