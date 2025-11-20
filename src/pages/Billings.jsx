import './Billings.css';

import { BsCheckAll } from 'react-icons/bs';
import { RxCrossCircled } from 'react-icons/rx';
import { FaArrowRight } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa6';
import { GoDownload } from 'react-icons/go';

const billing_data = [
  {
    id: '#487441',
    date: 'Dec 7, 2019 23:26',
    plan: 'Premium',
    amount: '$999 USD',
  },
  {
    id: '#653518',
    date: 'Dec 7, 2019 23:26',
    plan: 'Standard',
    amount: '$999 USD',
  },
  {
    id: '#267400',
    date: 'Dec 7, 2019 23:26',
    plan: 'Premium',
    amount: '$999 USD',
  },
  {
    id: '#651535',
    date: 'Dec 7, 2019 23:26',
    plan: 'Premium',
    amount: '$999 USD',
  },
  {
    id: '#449003',
    date: 'Dec 7, 2019 23:26',
    plan: 'Premium',
    amount: '$999 USD',
  },
  {
    id: '#558612',
    date: 'Dec 7, 2019 23:26',
    plan: 'Premium',
    amount: '$999 USD',
  },
];

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
          <div className='bil-container'>
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
        <div className='payment-container'>
          <div className='payment-card-container'>
            <p className='payment-text'>Payment Card</p>
            <div className='edit-container'>
              <FaRegEdit />
              <span>Edit Card</span>
            </div>
          </div>
          <div className='master-card-container'>
            <div className='master-details-container'>
              <FaCcMastercard className='master-card-icon' />
              <div className='person-details-container'>
                <p className='card-name'>Name on card</p>
                <p className='person-name'>Esther Howard</p>
              </div>
            </div>
            <div className='expire-date-container'>
              <p className='expire-date'>Expire Date</p>
              <p className='expires-on'>12/29</p>
            </div>
          </div>
          <p className='card-number'>6714 **** **** ****</p>
        </div>
      </div>
      <div className='latest-invoice-container'>
        <p className='invoice-header'>Latest Invoices</p>
        <div className='table-container'>
          <th className='table-header'>
            <td className='table-data'>#ID</td>
            <td className='table-data'>DATE</td>
            <td className='table-data'>PLAN</td>
            <td className='table-data'>AMOUNT</td>
          </th>
        </div>
        {billing_data.map((item) => {
          return (
            <table className='table-row'>
              <tr>
                <td className='number'>{item.id}</td>
              </tr>
              <tr>
                <td className='item-date'>{item.date}</td>
              </tr>
              <tr>
                <td className='item-date'>{item.plan}</td>
              </tr>
              <tr>
                <td className='item-date'>{item.amount}</td>
              </tr>
              <tr>
                <td className='item-date'>
                  <GoDownload className='download-icon' />
                </td>
              </tr>
            </table>
          );
        })}
      </div>
    </div>
  );
};

export default Billings;
