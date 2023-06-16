import React from 'react'
import './Sems1.css'
import { Link } from 'react-router-dom'

function Cse_sem1() {
    return (
        <div className='cse_sem1'>
            <h1>SUBJECTS</h1>
            <table>
                <tr>
                    <th>Sl. No.</th>
                    <th>Subject Name</th>
                    <th>View</th>
                </tr> 
                <tr>
                    <td>1</td>
                    <td><p className='cse_sem1_subject'>Principles of Programming Using C</p></td>
                    <td><button><Link className='link view_link'>view</Link></button></td>
                </tr>                     
                <tr>
                    <td>2</td>
                    <td><p className='cse_sem1_subject'>Introduction to Electrical Engineering</p></td>
                    <td><button><Link className='link view_link'>view</Link></button></td>
                </tr>                     
                <tr>
                    <td>3</td>
                    <td><p className='cse_sem1_subject'>Subject</p></td>
                    <td><button><Link className='link view_link'>view</Link></button></td>
                </tr>        
                <tr>
                    <td>4</td>
                    <td><p className='cse_sem1_subject'>Subject</p></td>
                    <td><button><Link className='link view_link'>view</Link></button></td>
                </tr>    
                <tr>
                    <td>5</td>
                    <td><p className='cse_sem1_subject'>Subject</p></td>
                    <td><button><Link className='link view_link'>view</Link></button></td>
                </tr>    
                <tr>
                    <td>6</td>
                    <td><p className='cse_sem1_subject'>Subject</p></td>
                    <td><button><Link className='link view_link'>view</Link></button></td>
                </tr>    
                <tr>
                    <td>7</td>
                    <td><p className='cse_sem1_subject'>Subject</p></td>
                    <td><button><Link className='link view_link'>view</Link></button></td>
                </tr>        
            </table>
        </div>
    )
}

export default Cse_sem1