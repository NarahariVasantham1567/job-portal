import './BlogList.css';

import { IoSearch } from 'react-icons/io5';
import { FaChevronUp } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import PostCard from '../components/PostCard/PostCard';
import BlogCard from '../components/BlogCard/BlogCard';

const checkboxData = [
  {
    id: 1,
    name: 'Graphics & Design',
    isChecked: false,
  },
  {
    id: 2,
    name: 'Code & Programming',
    isChecked: false,
  },
  {
    id: 3,
    name: 'Digital Marketing',
    isChecked: false,
  },
  {
    id: 4,
    name: 'Video & Animation',
    isChecked: false,
  },
  {
    id: 5,
    name: 'Music & Audio',
    isChecked: false,
  },
  {
    id: 6,
    name: 'Finance  & Accounting',
    isChecked: false,
  },
  {
    id: 7,
    name: 'Health & Care',
    isChecked: false,
  },
  {
    id: 8,
    name: 'Data Science',
    isChecked: false,
  },
];

const posts = [
  {
    id: 1,
    date: 'Nov 12, 2021',
    comments: 25,
    img: '/chess.jpeg',
    text: 'Integer volutpat fringilla ipsum, nec temper risus facilisis eget.',
  },
  {
    id: 2,
    date: 'Nov 12, 2021',
    comments: 25,
    img: '/chess.jpeg',
    text: 'Integer volutpat fringilla ipsum, nec temper risus facilisis eget.',
  },
  {
    id: 3,
    date: 'Nov 12, 2021',
    comments: 25,
    img: '/chess.jpeg',
    text: 'Integer volutpat fringilla ipsum, nec temper risus facilisis eget.',
  },
];

const blogData = [
  {
    id: 1,
    date: 'Nov 12, 2021',
    comments: 25,
    title: 'Proin sit amet massa eget odio consectetur ultricies.',
    description:
      'Integer imperdiet mauris eget nisi ultrices, quis hendrerit estconsequat. Vivamus et volutpat odio. Maecenas porta erat sed massabibendum pellentesque.',
  },
  {
    id: 2,
    date: 'Nov 12, 2021',
    comments: 25,
    title: 'Praesent tristique sagittis malesuada. Nulla vulputate pretium.',
    description:
      'Integer imperdiet mauris eget nisi ultrices, quis hendrerit estconsequat. Vivamus et volutpat odio. Maecenas porta erat sed massabibendum pellentesque.',
  },
  {
    id: 3,
    date: 'Nov 12, 2021',
    comments: 25,
    title: 'Integer volutpat fringilla ipsum, nec tempor risus facilisis eget.',
    description:
      'Integer imperdiet mauris eget nisi ultrices, quis hendrerit estconsequat. Vivamus et volutpat odio. Maecenas porta erat sed massabibendum pellentesque.',
  },
  {
    id: 4,
    date: 'Nov 12, 2021',
    comments: 25,
    title:
      'Praesent hendrerit diam ac metus finibus, id vehicula velit suscipit.',
    description:
      'Integer imperdiet mauris eget nisi ultrices, quis hendrerit estconsequat. Vivamus et volutpat odio. Maecenas porta erat sed massabibendum pellentesque.',
  },
  {
    id: 5,
    date: 'Nov 12, 2021',
    comments: 25,
    title: 'Nullam et est vel eros sodales sollicitudin.',
    description:
      'Integer imperdiet mauris eget nisi ultrices, quis hendrerit estconsequat. Vivamus et volutpat odio. Maecenas porta erat sed massabibendum pellentesque.',
  },
  {
    id: 6,
    date: 'Nov 12, 2021',
    comments: 25,
    title: 'Pellentesque lobortis diam in dictum maximus.',
    description:
      'Integer imperdiet mauris eget nisi ultrices, quis hendrerit estconsequat. Vivamus et volutpat odio. Maecenas porta erat sed massabibendum pellentesque.',
  },
  {
    id: 7,
    date: 'Nov 12, 2021',
    comments: 25,
    title: 'Class aptent taciti sociosqu ad litora torquent per.',
    description:
      'Integer imperdiet mauris eget nisi ultrices, quis hendrerit estconsequat. Vivamus et volutpat odio. Maecenas porta erat sed massabibendum pellentesque.',
  },
  {
    id: 8,
    date: 'Nov 12, 2021',
    comments: 25,
    title:
      'Curabitur feugiat urna quis ante aliquet, nec tincidunt sem mollis.',
    description:
      'Integer imperdiet mauris eget nisi ultrices, quis hendrerit estconsequat. Vivamus et volutpat odio. Maecenas porta erat sed massabibendum pellentesque.',
  },
];

const BlogList = () => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div className='bloglist-parent-container'>
      <div className='bloglist-header-container'>
        <div className='bloglist-nav-container'>
          <p>Blog</p>
          <p className='home-text'>Home / Blog</p>
        </div>
      </div>
      <div className='bloglist-main-container'>
        <div className='bloglist-sidebar-container'>
          <div className='bloglist-search-container'>
            <div className='search-input-container'>
              <p className='search-text'>Search</p>
              <div className='sidebar-search-input-container'>
                <IoSearch className='search-icon' />
                <input type='text' placeholder='Search' className='search' />
              </div>
            </div>
            <hr className='line' />
            <div className='bloglist-category-container'>
              <div className='category-container'>
                <p>Category</p>
                {showCategory ? (
                  <FaChevronDown
                    className='dropdown-icon'
                    onClick={() => setShowCategory(!showCategory)}
                  />
                ) : (
                  <FaChevronUp
                    className='dropdown-icon'
                    onClick={() => setShowCategory(!showCategory)}
                  />
                )}
              </div>
              {showCategory && (
                <div
                  className={
                    showCategory
                      ? 'bloglist-checkbox-parent-container show-bloglist-checkbox-parent-container'
                      : 'bloglist-checkbox-parent-container'
                  }
                >
                  {checkboxData.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className='bloglist-checkbox-container'
                      >
                        <input type='checkbox' className='checkbox-input' />{' '}
                        <label>{item.name}</label>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className='recent-post-parent-container'>
            <p>Recent Post</p>
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
          <div className='gallery-parent-container'>
            <p>Gallery</p>
            <div className='gallery-img-container'>
              <img
                src='/chess.jpeg'
                alt='chess'
                className='gallery-chess-img'
              />
              <img
                src='/chess.jpeg'
                alt='chess'
                className='gallery-chess-img'
              />
              <img
                src='/chess.jpeg'
                alt='chess'
                className='gallery-chess-img'
              />
              <img
                src='/chess.jpeg'
                alt='chess'
                className='gallery-chess-img'
              />
              <img
                src='/chess.jpeg'
                alt='chess'
                className='gallery-chess-img'
              />
              <img
                src='/chess.jpeg'
                alt='chess'
                className='gallery-chess-img'
              />
            </div>
          </div>
          <div className='popular-tag-container'>
            <p>Popular Tag</p>
            <div className='popular-btn-container'>
              <button className='popular-btn'>Design</button>
              <button className='popular-btn'>Programming</button>
              <button className='popular-btn'>Health & Care</button>
              <button className='popular-btn'>Motion Design</button>
              <button className='popular-btn'>Photography</button>
              <button className='popular-btn'>Politics</button>
            </div>
          </div>
        </div>
        <div className='bloglist-main-content-container'>
          {blogData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
