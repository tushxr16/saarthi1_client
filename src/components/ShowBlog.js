import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowBlog.css'
import { Link } from 'react-router-dom';
 
const BlogList = () => { 
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('http://localhost:8082/api/blog');
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-list">
      <div className='col-md-11'>
        <Link
          to='/create-blog'
          className='btn btn-outline-warning float-right'
        >
          + Add New blog
        </Link>
        <Link
          to='/'
          className='btn btn-outline-warning float-right'
        >
          Go to Homepage
        </Link>
        
        <br />
        <br />
        <hr />
      </div>
      {blogs.map(blog => (
        <div key={blog._id} className="blog-item">
          <h2 className="blog-item-title">{blog.title}</h2>
          <p className="blog-item-content">{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
