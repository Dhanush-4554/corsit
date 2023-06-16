import React from 'react'
import Semcard from './Semcard'
import './Sems1.css'
import { Link } from 'react-router-dom'


function Sems1() {
    return (
        <div className='cse'>
            <div class="sems1_row">
                <Link className='link' to="/cse-sem1"><div class="card" ><Semcard number='1' /></div></Link>
                <Link className='link' to="/cse-sem2"><div class="card" ><Semcard number='2' /></div></Link>
                <Link className='link'><div class="card"><Semcard number='3' /></div></Link>
            </div>
            <div class="sems1_row">
                <Link className='link'><div class="card"><Semcard number='4' /></div></Link>
                <Link className='link'><div class="card"><Semcard number='5' /></div></Link>
                <Link className='link'><div class="card"><Semcard number='6' /></div></Link>
            </div>
            <div class="sems1_row">
                <Link className='link'><div class="card"><Semcard number='7' /></div></Link>
                <Link className='link'><div class="card"><Semcard number='8' /></div></Link>
            </div>

        </div>
    )
}

export default Sems1