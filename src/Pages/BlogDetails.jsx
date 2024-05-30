import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../common/Header';
import { blogs } from '../Data/blogs';

export default function BlogDetails() {
    let uselocation = useLocation();
    let currentId = uselocation.pathname.split('/')[2]
    let currentData = blogs.filter((v)=>v.id==currentId)[0]
    console.log(currentData)
    return (
        <div className='blogDetailsPage'>
        <Header />
        <div className='blogDetailsContainer'>
            <h1 className='blogTitle'>{currentData.title}</h1>
            <p className='blogDescription'>{currentData.description}</p>
        </div>
    </div>
  )
}
