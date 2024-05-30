import React from 'react'
import Header from '../common/Header'
import { blogs } from '../Data/blogs'
import { Link } from 'react-router-dom';
export default function Blog() {
    let allBlogs = blogs.map((data, i) => {
        return (
            <div className='blogItem' key={i}>
                <p className='blogTitle'>{data.title}</p>
                <p className='blogDescription'>{data.description.split(' ').slice(0, 5).join(' ') + '...'}</p>
                <button className='readMoreButton'><Link to={`/blog/${data.id}`}>Read More</Link></button>
            </div>
        );
    });

    return (
        <div className='blogPage'>
            <Header />
            <h1>Blog</h1>
            <div className='container'>
                {allBlogs}
            </div>
        </div>
    );
}

