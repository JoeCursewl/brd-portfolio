import './an-footer.css'
import  { Link } from 'react-router-dom'

export default function AnFooter() {
    return (
        <footer className='ft-all-cn'>
            <div className='ft-cn' style={{ padding: 18 }}>
                <div className='ft-links-an'>
                    <h3 className='u-link'>
                        <Link>
                            Anthony
                        </Link>
                    </h3>
                </div>

                <div className='ft-links-an'>
                    <p>
                        <a href="https://github.com/JoeCursewl" target='_blank' className='u-link'>
                            repository
                        </a>
                    </p>

                    <p className='u-link'>
                        <Link>
                            contact
                        </Link>
                    </p>

                    <p>
                        <a href="https://github.com/JoeCursewl" target='_blank' className='u-link'>
                            v0.0.1  
                        </a>
                    </p>

                </div>

                <div className='ft-links-an-2'>
                    <h3 className='u-link'>
                        <Link>
                            Anthony
                        </Link>
                    </h3>

                    <p>
                        <a href="https://github.com/JoeCursewl" target='_blank' className='u-link'>
                            repository
                        </a>
                    </p>
                </div>

                <div className='ft-links-an-2'>

                    <p className='u-link'>
                        <Link>
                            contact
                        </Link>
                    </p>

                    <p>
                        <a href="https://github.com/JoeCursewl" target='_blank' className='u-link'>
                            v0.0.1  
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}