import './Billings.css';

import { BsCheckAll } from 'react-icons/bs';
import { RxCrossCircled } from 'react-icons/rx';
import { FaArrowRight } from 'react-icons/fa6';

const Billings = () => {
  return (
    <div className='billings-container'>
      <div className='grid-container'>
        <div className='current-plan-container'>
          <p>Current Plan</p>
          <h3>Premium</h3>
          <span>
            Vestibulam ante ipsum prim in faucibus orciluctus et ultrices
            posuere.
          </span>
          <div className='btns-container'>
            <button className='change-btn'>Change Plans</button>
            <button className='cancel-btn'>Cancel Plan</button>
          </div>
        </div>
        <div className='plan-benefits-container'>
          <p>Plan Benefits</p>
          <span>Pron porta enum sit amet piacerat finbus. Sed egat lorem.</span>
          <div className='list-container'>
            <div className='list-item-container'>
              <span>
                <BsCheckAll className='tick-icon' /> 6 Active Jobs
              </span>
              <span>
                <BsCheckAll className='tick-icon' /> Highlights job with colors
              </span>
              <span>
                <BsCheckAll className='tick-icon' /> 60 Days resume visibility
              </span>
            </div>
            <div className='list-item-container'>
              <span>
                <BsCheckAll className='tick-icon' /> Urgents Featured Jobs
              </span>
              <span>
                <BsCheckAll className='tick-icon' /> Access & Saved 20
                Candidates
              </span>
              <span>
                <BsCheckAll className='tick-icon' /> 24/7 Critical Support
              </span>
            </div>
          </div>
          <div className='container'>
            <p className='text'>Remaining</p>
            <div className='li-container'>
              <span>
                <RxCrossCircled className='cros-icon' /> Urgents Featured Jobs
              </span>
              <span>
                <RxCrossCircled className='cros-icon' /> Access & Saved 20
                Candidates
              </span>
              <span>
                <RxCrossCircled className='cros-icon' /> 24/7 Critical Support
              </span>
            </div>
          </div>
        </div>
        <div className='invoice-container'>
          <p className='invoice-text'>Next Invoices</p>
          <h2 className='money'>$59.00 USD</h2>
          <p className='date'>Nov 28, 2021</p>
          <p className='package-text'>Package started Jan 28, 2021</p>
          <p className='monthly-pay'>
            You have to pay this amount of money every month.
          </p>
          <button className='pay-btn'>
            Pay Now <FaArrowRight className='arrow-icon' />
          </button>
        </div>
        <div className='payment-container'></div>
      </div>
    </div>
  );
};

export default Billings;
