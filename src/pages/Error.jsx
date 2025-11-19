import { Link } from 'react-router-dom';
import './Error.css';

import { FaArrowRight } from 'react-icons/fa6';

const ErrorPage = () => {
  return (
    <div className='parent-container'>
      <div className='error-page-container'>
        <div className='content-container'>
          <h2 className='error-page-header'>Opps! Page not found</h2>
          <p className='error-page-text'>
            Something went wrong. it's look like the link is brokenor the page
            is removed.
          </p>
          <div className='error-btn-container'>
            <button className='home-btn'>
              <Link to='/'>
                Home <FaArrowRight />
              </Link>
            </button>
            <button className='go-back-btn'>
              <Link to='/'>Go Back</Link>
            </button>
          </div>
        </div>
        <div className='error-img-container'>
          <img src='/NotFound.png' alt='not found' className='error-img' />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
