import React from 'react'
import './addnote.css'

const Addnote = () => {
    return (
        <div className='addNote'>
            <div className="allcontent">
                <div className="title">
                    <label htmlFor="">Title: </label><br />
                    <input type="text" placeholder='title' id='t'/>
                </div>

                <div className="content">
                    <label htmlFor="">Content: </label>
                    <input type="text" placeholder='What is in your mind?...' id='c'/>
                </div>
                <button >addnote</button>
            </div>
        </div>
    )
}

export default Addnote