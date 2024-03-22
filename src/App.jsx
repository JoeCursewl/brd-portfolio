import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

export default function NavBar() {
  const [open, SetIsopen] = useState(false);
  const [show, setShow] = useState(false)

  useEffect(() => {
    const botonBars = document.querySelector(".bars");
    botonBars.addEventListener('click', animateBars);

    return () => {
      botonBars.removeEventListener('click', animateBars);
    };
  }, [open]);

  function animateBars() {
    const lines1 = document.querySelector(".lines1__bars-menu");
    const lines2 = document.querySelector(".lines2__bars-menu");
    const lines3 = document.querySelector(".lines3__bars-menu");
    lines1.classList.toggle("activelines1__bars-menu")
    lines2.classList.toggle("activelines2__bars-menu")
    lines3.classList.toggle("activelines3__bars-menu")
    SetIsopen(!open);
    setShow(!show)
  }

  return (
    <nav className="nav-main">

      <div className="nav-all-cont">

        <div className='img-pf-al'>
          <img src="/cursewl_img.jpg" alt="Anthony Cursewl File Image" />
        </div>

        <div className='max-[650px]:hidden'>
          <ul className='ln-dv-all'>
            <li><Link to='/about' className='u-link'>About</Link></li>
            <li><Link to='/' className='u-link'>Home</Link></li>
          </ul>
        </div>

        <div className='bars sm:hidden'>
          <span className="lines1__bars-menu"></span>
          <span className="lines2__bars-menu"></span>
          <span className="lines3__bars-menu"></span>
        </div>


        <div className={`modal ${show ? 'show' : ''}`} onClick={() => animateBars()}>
          <div className="modal-content flex justify-center items-center">

            <div className='flex justify-center items-center gap-4 flex-col'>
              <Link to='/' className='u-link text-[1.5rem]'>Home</Link>
              <Link to='/about' className='u-link text-[1.5rem]'>About</Link>
              <a href={"https://github.com/JoeCursewl"} className='u-link text-[1.5rem]'>Repository</a>
            </div>

          </div>
        </div>


      </div>

    </nav>
  )
}

