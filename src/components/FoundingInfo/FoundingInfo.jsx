import './FoundingInfo.css';

export default function FoundingInfo() {
  return (
    <div className='founding-info-container'>
      <div className='form-container'>
        <div className='label-container'>
          <label className='label'>Organization Type</label>
          <select className='select-input'>
            <option value='Own'>Select...</option>
            <option value='Own'>Select...</option>
            <option value='Own'>Select...</option>
          </select>
        </div>
        <div className='label-container'>
          <label className='label'>Industry Types</label>
          <select className='select-input'>
            <option value='Own'>Select...</option>
            <option value='Own'>Select...</option>
            <option value='Own'>Select...</option>
          </select>
        </div>
        <div className='label-container'>
          <label className='label'>Team Size</label>
          <select className='select-input'>
            <option value='Own'>Select...</option>
            <option value='Own'>Select...</option>
            <option value='Own'>Select...</option>
          </select>
        </div>
        <div className='label-container'>
          <label className='label'>Year of Eshtablishment</label>
          <input type='date' className='date-input' />
        </div>
        <div className='label-container'>
          <label className='label'>Company Website</label>
          <input
            type='text'
            placeholder='Website url...'
            className='text-input-field'
          />
        </div>
      </div>
      <p className='company-name'>Company Vision</p>
      <textarea
        rows={5}
        color={50}
        className='text-input'
        placeholder='Tell us what vision of your company...'
      ></textarea>
      <button className='save-btn'>Save Changes</button>
    </div>
  );
}
