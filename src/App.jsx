import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [show, setShow] = useState(false); // Estado para controlar la visibilidad del modal

  const handleOpenModal = () => {
    setShow(true); // Abrir el modal
  };

  const handleCloseModal = () => {
    setShow(false); // Cerrar el modal
  };

  return (
    <nav className="nav-main">

      <div className="nav-all-cont">

        <div className='img-pf-al'>
          <img src="/cursewl_img.jpg" alt="Anthony Cursewl File Image" />
        </div>

        <div className='hidden sm:block'>
          <ul className='ln-dv-all'>
            <li><Link to='/about' className='u-link'>About</Link></li>
            <li><Link to='/skills' className='u-link'>Skills</Link></li>
          </ul>
        </div>

        <div className='sm:hidden'>
          <div onClick={() => handleOpenModal()} className='hover:cursor-pointer'>
            <img src="/technologies/html-img.svg" alt="SVG File Menu" />
          </div>

          <ul className={`ln-dv-all`}>
            <li><Link to='/about' className='u-link'>About</Link></li>
            <li><Link to='/skills' className='u-link'>Skills</Link></li>
          </ul>
        </div>

        <div className={`modal ${show ? 'show' : ''}`} onClick={handleCloseModal}>
          <div className="modal-content">
            <h2>Modal</h2>
            <p>Contenido del modal...</p>
            <button onClick={handleCloseModal}>Cerrar Modal</button>
          </div>
        </div>


      </div>

    </nav>
  )
}

