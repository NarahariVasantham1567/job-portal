import './BlogCard.css';

import { MdOutlineCalendarToday } from 'react-icons/md';
import { LuMessageCircleMore } from 'react-icons/lu';
import { FaArrowRight } from 'react-icons/fa6';

const BlogCard = ({ id, date, comments, title, description }) => {
  return (
    <div className='blog-card-container'>
      <div className='blog-card-img-container'></div>
      <div className='blog-card-content-container'>
        <div className='calendar-comments-container'>
          <div className='calendar-container'>
            <MdOutlineCalendarToday className='calendar-icon' /> {date}
          </div>
          <div className='calendar-container'>
            <LuMessageCircleMore className='calendar-icon' /> {comments}{' '}
            comments
          </div>
        </div>
        <p className='blog-card-heading'>{title}</p>
        <p className='blog-card-description'>{description}</p>
        <button className='readmore-btn'>
          Read More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
