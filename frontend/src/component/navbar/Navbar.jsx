import React from 'react'
import './navbar.css'
import {FaFileExport} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
import {AiFillHome, AiOutlinePlus} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div>
        <div className="navbar-menu">
            <a href="/home"><AiFillHome></AiFillHome> HOME</a>
            <a href="/addnote"><AiOutlinePlus></AiOutlinePlus> Add Note</a>
            <a href="/deleteall"><RxCross2></RxCross2> Delete all</a>
            <a href="/export"><FaFileExport></FaFileExport>Export</a>
        </div>
    </div>
  )
}

export default Navbar