import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'


function Main() {
  return (
    <div className='main'>
       <h1 className='main_headline'>CHOOSE YOUR BRANCH</h1>
        <div className='main_branch'>
            <Link to={'/cse'} className='link'><p className='branch_name'>➤ Computer Science and Engineering</p></Link>
            <Link to={'/ece'} className='link'><p className='branch_name'>➤ Computer Science and Engineering</p></Link>
            <Link to={'/'} className='link'><p className='branch_name'>➤ Computer Science and Engineering</p></Link>
            <Link to={'/'} className='link'><p className='branch_name'>➤ Computer Science and Engineering</p></Link>
            <Link to={'/'} className='link'><p className='branch_name'>➤ Computer Science and Engineering</p></Link>
        </div>
    </div>
  )
}

export default Main