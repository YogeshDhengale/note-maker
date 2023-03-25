import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
        <div className="search">
            <input type="text" placeholder={`Search!`}/>
            <AiOutlineSearch className='searchbutton'></AiOutlineSearch>
        </div>

        <div className="card">
             <p className="time">Time</p>
            <h6 className="title">Title</h6>
            <p className="content">Content</p>
        </div>
    </div>
  )
}

export default Home