import { useState } from 'react';
import './FAQs.css';

import { FaPlus } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';

const accountsData = [
  {
    id: 1,
    question: 'Donec in ipsum sit amet mi tincident tacinia ut id risus',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas esse repellendus, ut id sed voluptatum rem corporis itaque facilis nostrum, blanditiis sequi fuga adipisci!',
    isShow: false,
  },
  {
    id: 2,
    question: 'Etiam rutrum ligula at dui tempror, eu tempus ligula tristique.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas esse repellendus, ut id sed voluptatum rem corporis itaque facilis nostrum.',
    isShow: false,
  },
  {
    id: 3,
    question: 'Morbi vitae neque eu sapien aliquet rhoncous.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas esse repellendus, ut id sed voluptatum rem corporis itaque facilis nostrum, blanditiis.',
    isShow: false,
  },
];

const employersData = [
  {
    id: 1,
    question: 'Donec in ipsum sit amet mi tincident tacinia ut id risus',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas esse repellendus, ut id sed voluptatum rem corporis itaque facilis nostrum, blanditiis sequi fuga adipisci!',
    isShow: false,
  },
  {
    id: 2,
    question: 'Etiam rutrum ligula at dui tempror, eu tempus ligula tristique.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas esse repellendus, ut id sed voluptatum rem corporis itaque facilis nostrum.',
    isShow: false,
  },
  {
    id: 3,
    question: 'Morbi vitae neque eu sapien aliquet rhoncous.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas esse repellendus, ut id sed voluptatum rem corporis itaque facilis nostrum, blanditiis.',
    isShow: false,
  },
];

const candidateData = [
  {
    id: 1,
    question: 'Donec in ipsum sit amet mi tincident tacinia ut id risus',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas esse repellendus, ut id sed voluptatum rem corporis itaque facilis nostrum, blanditiis sequi fuga adipisci!',
    isShow: false,
  },
  {
    id: 2,
    question: 'Etiam rutrum ligula at dui tempror, eu tempus ligula tristique.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas esse repellendus, ut id sed voluptatum rem corporis itaque facilis nostrum.',
    isShow: false,
  },
  {
    id: 3,
    question: 'Morbi vitae neque eu sapien aliquet rhoncous.',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptas esse repellendus, ut id sed voluptatum rem corporis itaque facilis nostrum, blanditiis.',
    isShow: false,
  },
];

const FAQs = () => {
  const [accounts, setAccounts] = useState(accountsData);
  const [employer, setEmployer] = useState(employersData);
  const [candidate, setCandidate] = useState(candidateData);

  const onShowAnswer = (id) => {
    const newAccountsData = accounts.map((item) =>
      item.id === id ? { ...item, isShow: !item.isShow } : item
    );
    setAccounts(newAccountsData);
  };

  const onCloseAnswer = (id) => {
    const newAccountsData = accounts.map((item) =>
      item.id === id ? { ...item, isShow: false } : item
    );
    setAccounts(newAccountsData);
  };

  const onShowEmployerData = (id) => {
    const newEmployersData = employer.map((item) =>
      item.id === id ? { ...item, isShow: !item.isShow } : item
    );
    setEmployer(newEmployersData);
  };

  const onCloseEmployersData = (id) => {
    const newEmployersData = employer.map((item) =>
      item.id === id ? { ...item, isShow: false } : item
    );
    setEmployer(newEmployersData);
  };

  const onShowCandidatesData = (id) => {
    const newCandidatesData = candidate.map((item) =>
      item.id === id ? { ...item, isShow: !item.isShow } : item
    );
    setCandidate(newCandidatesData);
  };

  const onCloseCandidatesData = (id) => {
    const newCandidatesData = employer.map((item) =>
      item.id === id ? { ...item, isShow: false } : item
    );
    setCandidate(newCandidatesData);
  };

  return (
    <div className='faqs-container'>
      <div className='faqs-header'>
        <div className='faqs-nav-container'>
          <p>Faqs</p>
          <p className='home-text'>Home / Faqs</p>
        </div>
      </div>
      <div className='account-container'>
        <h3 className='account-header'>Your Account</h3>
        {accounts.map((item) => {
          return (
            <div key={item.id}>
              <div className='question-container'>
                {item.question} <FaPlus onClick={() => onShowAnswer(item.id)} />
              </div>
              <div
                className={
                  item.isShow
                    ? 'answer-parent-container show-answers'
                    : 'answer-parent-container'
                }
              >
                <div className='answer-container'>
                  <span className='question'>{item.question}</span>{' '}
                  <RxCross2 onClick={() => onCloseAnswer(item.id)} />
                </div>
                <span className='answer'>{item.answer}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className='account-container'>
        <h3 className='account-header'>Employers and Jobs</h3>
        {employer.map((item) => {
          return (
            <div key={item.id}>
              <div className='question-container'>
                {item.question}{' '}
                <FaPlus onClick={() => onShowEmployerData(item.id)} />
              </div>
              <div
                className={
                  item.isShow
                    ? 'answer-parent-container show-answers'
                    : 'answer-parent-container'
                }
              >
                <div className='answer-container'>
                  <span className='question'>{item.question}</span>{' '}
                  <RxCross2 onClick={() => onCloseEmployersData(item.id)} />
                </div>
                <span className='answer'>{item.answer}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className='account-container'>
        <h3 className='account-header'>Candidate & Resume</h3>
        {candidate.map((item) => {
          return (
            <div key={item.id}>
              <div className='question-container'>
                {item.question}{' '}
                <FaPlus onClick={() => onShowCandidatesData(item.id)} />
              </div>
              <div
                className={
                  item.isShow
                    ? 'answer-parent-container show-answers'
                    : 'answer-parent-container'
                }
              >
                <div className='answer-container'>
                  <span className='question'>{item.question}</span>{' '}
                  <RxCross2 onClick={() => onCloseCandidatesData(item.id)} />
                </div>
                <span className='answer'>{item.answer}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQs;
