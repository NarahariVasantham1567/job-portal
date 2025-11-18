import { createPortal } from 'react-dom';
import './Modal.css';

export default function Modal() {
  return createPortal(
    <div className='modal-container'>
      <div className='promote-container'>
        <h3 className='modal-heading'>Promote Job: UI/UX Designer</h3>
        <p className='modal-description'>
          Fusco commodo, sem nom temper convallis, sapian turpis bidendum
          turpis, non pharetra nisl vellit pulvinar lectus. Suspendisse varius
          at nisl aliquam.
        </p>
      </div>
    </div>,
    document.getElementById('portal')
  );
}
