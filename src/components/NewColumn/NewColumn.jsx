import './NewColumn.css';

import useModalContext from '../../context/ModalContext';
import { IoMdClose } from 'react-icons/io';

const NewColumn = () => {
  const { setOpenNewColumn } = useModalContext();

  return (
    <div className='new-column-modal-container'>
      <div className='new-column-container'>
        <p className='column-heading'>Add New Column</p>
        <label className='column-label'>Column Name</label>
        <input type='text' className='column-input' />
        <div className='column-btn-container'>
          <button
            className='column-cancel-btn'
            onClick={() => setOpenNewColumn(false)}
          >
            Cancel
          </button>
          <button className='column-add-btn'>Add Column</button>
        </div>
      </div>
      <div
        className='column-close-btn-container'
        onClick={() => setOpenNewColumn(false)}
      >
        <IoMdClose className='column-close-icon' />
      </div>
    </div>
  );
};

export default NewColumn;
