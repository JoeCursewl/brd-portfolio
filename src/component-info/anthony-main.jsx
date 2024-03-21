import './anthony-main.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProjectsBrd from './sec-project-brd'

export default function Main() {

    return (
        <motion.section className='sec-mn-if' animate={{ y: 0, opacity: 1 }} initial={{ y: -70, opacity: 0 }} transition={{ duration: 0.4}}>
            <div className='all-content-idk'>

                <div className='fst-info-ahnt'>
                    <h1>Anthony Zerpa, a <span className='spn-ant'>new</span> <span className='spn-dvp'>Developer();</span></h1>

                    <p>I'm a college student who enjoys building <span className='spn-dvp'>projects</span> and just making cool stuff. I also love opportunities to learn new and interesting things. One day I hope to be a professional developer and make an impact on the world using technology.
                        If you want to read about some of my projects, you can take a look <Link to={"/brd-projects"}><span className='god-dm'>here.</span></Link>
                    </p>
                </div>

                <ProjectsBrd />
                

            </div>
        </motion.section>
    )
}