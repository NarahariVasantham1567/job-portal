import './CompanyInfo.css';

export default function CompanyInfo() {
  return (
    <div className='company-info-container'>
      <h4 className='logo-heading'>Logo & Banner Image</h4>
      <div className='img-container'>
        <div className='logo-container'>
          <p className='logo-header'>Upload Logo</p>
          <div className='logo'></div>
          <div className='flex-container'>
            <p className='byte'>3.5 MB</p>
            <p className='remove'>Remove</p>
            <p className='replace'>Replace</p>
          </div>
        </div>
        <div className='banner-container'>
          <p className='logo-header'>Banner Image</p>
          <div className='logo'></div>
          <div className='flex-container'>
            <p className='byte'>4.3 MB</p>
            <p className='remove'>Remove</p>
            <p className='replace'>Replace</p>
          </div>
        </div>
      </div>
      <p className='company-name'>Company name</p>
      <input type='text' className='input-field' />
      <p className='company-name'>About us</p>
      <textarea
        rows={5}
        color={50}
        className='text-input'
        placeholder='Write down about your company here. Let the Candidate know who we are...'
      ></textarea>
      <button className='save-btn'>Save Changes</button>
    </div>
  );
}
