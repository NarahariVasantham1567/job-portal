import './PromoteJobCard.css';

import { FaArrowRight } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import useModalContext from '../../context/ModalContext';

const PromoteJobCard = () => {
  const { setOpenJobCard } = useModalContext();

  return (
    <div className='promote-job-card-model-container'>
      <div className='promote-job-card-container'>
        <div className='promote-job-content-container'>
          <h3 className='promote-job-heading'>Promote Job: UI/UX Designer</h3>
          <p className='promote-job-description'>
            Fusce commodo, sem non tempor convallis, sapien turpis bibendum
            turpis, non pharetra nist velit pulvinar lectus. Suspendisse varius
            at nisl aliquam.
          </p>
          <div className='promote-job-grid-container'>
            <div className='promote-job-top-container'>
              <p className='promote-job-top-heading'>ALWAYS ON THE TOP</p>
              <div className='promote-job-child-grid-container'>
                <div className='promote-job-shimmer-container'>
                  <div className='promote-job-img-container'>
                    <div className='promote-job-img'></div>
                    <div className='promote-job-text-container'>
                      <div className='promote-job-title'></div>
                      <div className='promote-job-text'></div>
                      <div className='promote-job-text'></div>
                    </div>
                  </div>
                  <div className='promote-job-button-container'></div>
                </div>
                <div className='promote-job-shimmer-container'>
                  <div className='promote-job-img-container'>
                    <div className='promote-job-img'></div>
                    <div className='promote-job-text-container'>
                      <div className='promote-job-title'></div>
                      <div className='promote-job-text'></div>
                      <div className='promote-job-text'></div>
                    </div>
                  </div>
                  <div className='promote-job-button-container'></div>
                </div>
                <div className='promote-job-shimmer-container'>
                  <div className='promote-job-img-container'>
                    <div className='promote-job-img'></div>
                    <div className='promote-job-text-container'>
                      <div className='promote-job-title'></div>
                      <div className='promote-job-text'></div>
                      <div className='promote-job-text'></div>
                    </div>
                  </div>
                  <div className='promote-job-button-container'></div>
                </div>
                <div className='promote-job-shimmer-container'>
                  <div className='promote-job-img-container'>
                    <div className='promote-job-img'></div>
                    <div className='promote-job-text-container'>
                      <div className='promote-job-title'></div>
                      <div className='promote-job-text'></div>
                      <div className='promote-job-text'></div>
                    </div>
                  </div>
                  <div className='promote-job-button-container'></div>
                </div>
              </div>
              <div className='promote-job-radio-container'>
                <div className='job-radio-container'>
                  <input type='radio' />
                  <label className='promote-job-label'>Featured Your Job</label>
                </div>
                <p className='promote-job-label-text'>
                  Sed neque diam, lacinia nec dolor et, equismod bibendum
                  turpis. Sed feugiat fauc.
                </p>
              </div>
            </div>
            <div className='promote-job-top-container'>
              <p className='promote-job-top-heading'>ALWAYS ON THE TOP</p>
              <div className='promote-job-child-grid-container'>
                <div className='promote-job-shimmer-container'>
                  <div className='promote-job-img-container'>
                    <div className='promote-job-img'></div>
                    <div className='promote-job-text-container'>
                      <div className='promote-job-title'></div>
                      <div className='promote-job-text'></div>
                      <div className='promote-job-text'></div>
                    </div>
                  </div>
                  <div className='promote-job-button-container'></div>
                </div>
                <div className='promote-job-shimmer-container'>
                  <div className='promote-job-img-container'>
                    <div className='promote-job-img'></div>
                    <div className='promote-job-text-container'>
                      <div className='promote-job-title'></div>
                      <div className='promote-job-text'></div>
                      <div className='promote-job-text'></div>
                    </div>
                  </div>
                  <div className='promote-job-button-container'></div>
                </div>
                <div className='promote-job-shimmer-container'>
                  <div className='promote-job-img-container'>
                    <div className='promote-job-img'></div>
                    <div className='promote-job-text-container'>
                      <div className='promote-job-title'></div>
                      <div className='promote-job-text'></div>
                      <div className='promote-job-text'></div>
                    </div>
                  </div>
                  <div className='promote-job-button-container'></div>
                </div>
                <div className='promote-job-shimmer-container'>
                  <div className='promote-job-img-container'>
                    <div className='promote-job-img'></div>
                    <div className='promote-job-text-container'>
                      <div className='promote-job-title'></div>
                      <div className='promote-job-text'></div>
                      <div className='promote-job-text'></div>
                    </div>
                  </div>
                  <div className='promote-job-button-container'></div>
                </div>
              </div>
              <div className='promote-job-radio-container'>
                <div className='job-radio-container'>
                  <input type='radio' />
                  <label className='promote-job-label'>Featured Your Job</label>
                </div>
                <p className='promote-job-label-text'>
                  Sed neque diam, lacinia nec dolor et, equismod bibendum
                  turpis. Sed feugiat fauc.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='promote-job-btn-container'>
          <button
            className='promote-job-cancel-btn'
            onClick={() => setOpenJobCard(false)}
          >
            Cancel
          </button>
          <button className='promote-job-promote-btn'>
            PROMOTE JOB <FaArrowRight />
          </button>
        </div>
      </div>
      <div
        className='promote-job-cross-btn-container'
        onClick={() => setOpenJobCard(false)}
      >
        <IoMdClose className='promote-job-cross-icon' />
      </div>
    </div>
  );
};

export default PromoteJobCard;
