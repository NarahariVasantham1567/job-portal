import './PostCard.css';

const PostCard = ({ id, date, comments, img, text }) => {
  return (
    <div className='post-card-container'>
      <div className='post-img-container'>
        <img src={img} alt='chess' className='chess-img' />
      </div>
      <div className='post-content-container'>
        <p className='post-date-text'>
          {date} . {comments} comments
        </p>
        <p className='post-description'>{text}</p>
      </div>
    </div>
  );
};

export default PostCard;
