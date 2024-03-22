import './App.css'
import { Link } from 'react-router-dom'

export default function NavBar () {
  return (
    <nav className="nav-main">

      <div className="nav-all-cont">
        <div className='img-pf-al'>
          <img src="/cursewl_img.jpg" alt="Anthony Cursewl File Image" />
        </div>

        <div className=''>
          <ul className='ln-dv-all'>
            <li><Link to='/about'className='u-link'>About</Link></li>
            <li><Link to='/skills' className='u-link'>Skills</Link></li>
          </ul>
        </div>
      </div>

    </nav> 
  )
}