import './anthony-main.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProjectsBrd from './sec-project-brd'
import { useState } from 'react'

export default function Main() {
    const [copy, setCopy] = useState(false)
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopy(true);

        setTimeout(() => {
            setCopy(false)
        }, 1000)
    }

    const [copy2, setCopy2] = useState(false)
    const copyToClipboard2 = (text) => {
        navigator.clipboard.writeText(text);
        setCopy2(true);

        setTimeout(() => {
            setCopy2(false)
        }, 1000)
    }

    const pdfURL = 'https://firebasestorage.googleapis.com/v0/b/bitter-app-14614.appspot.com/o/pdfs%2Fplanilla_de_materias.pdf?alt=media&token=851e089c-c9ef-41a4-92d2-6851fef7d76f'; // URL del archivo PDF


    return (
        <motion.section className='sec-mn-if' animate={{ y: 0, opacity: 1 }} initial={{ y: -70, opacity: 0 }} transition={{ duration: 0.4 }}>
            <div className='all-content-idk'>

                <div className='fst-info-ahnt'>
                    <div className='flex justify-start items-center my-5 gap-3 max-[668px]:flex-col max-[668px]:items-start'>
                        <h1>Anthony Zerpa, a <span className=''>new</span> <span className='spn-dvp'>Developer();</span>
                        </h1>
                        <a download={true} href={"/files/anthony_zerpa_cv.txt"}
                            className='flex justify-center items-center card-info-ant px-2 py-1 text-[14px] text-[#dcadfc] rounded-[12px] border-solid border-[0.5px] border-[#dcadfc28] transition-colors hover:bg-[#1e1320]'>Download CV</a>
                    </div>


                    <p>I'm a college student who enjoys building <span className='spn-dvp'>projects</span> and just making cool stuff. I also love opportunities to learn new and interesting things. One day I hope to be a professional developer and make an impact on the world using technology.
                        If you want to read about some of my projects, you can take a look <Link><span className='god-dm'>down below.</span></Link>
                    </p>
                </div>

                <ProjectsBrd />

                <div className='grid gap-y-8'>
                    <div className='w-full px-6 py-4 card-info-ant border border-solid border-[#3b254615] rounded-[8px] flex justify-start items-center flex-col'>
                        <div className='w-full mb-2'>
                            <h2 className='text-[1.5rem]'>About me</h2>
                        </div>

                        <div>
                            <p>Hi there! 👋 I'm <span className='spn-dvp'>Anthony Zerpa</span>, a highly motivated <span className='spn-ant'>Frontend & Backend</span> developer with a passion for delovoping new stuff. I bring 2 years of experience to the table, and I'm always eager to learn and grow. I'm particularly interested in Web development. In my free time, you might find me producing music and probably designing. Let's connect and discuss how I can contribute to your team!</p>
                        </div>

                        <div className='w-full flex justify-start items-start gap-4 mt-6 flex-col md:flex-row'>
                            <Link to='/about' className='bg-[#050505a2] px-4 py-2 rounded-[8px] flex justify-center items-center gap-2 border-solid border-[0.5px] border-[#4242427e] transition-colors hover:border-[#844a917e]'>
                                See more
                                <img className='w-5' src="/svg-projects/arrow-img.svg" alt="" />
                            </Link>

                            <div className={`${copy === true ? 'border-[#4eac5e]' : 'border-[#4242427e]'} w-[200px] overflow-hidden text-ellipsis whitespace-nowrap bg-[#050505a2] px-4 py-2 rounded-[8px] flex justify-start items-center gap-2 border-solid border-[0.5px] transition-colors cursor-pointer stuff-ellipsis`} onClick={() => copyToClipboard("zerpaanthony.wx@gmail.com")}>
                                <p className='w-[200px] overflow-hidden text-ellipsis whitespace-nowrap'>{copy === true ? 'Text copied!' : 'zerpaanthony.wx@gmail.com'}</p>
                                <img className='w-5' src="/svg-projects/arrow-img.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='w-full px-6 py-4 card-info-ant border border-solid border-[#3b254615] rounded-[8px] flex justify-start items-center flex-col'>
                        <div className='w-full mb-2'>
                            <h2 className='text-[1.5rem]'>Skills</h2>
                        </div>

                        <div>
                            <p>As a <span className='spn-ant'>junior web developer</span>, I am eager to contribute my <span className='spn-dvp'>skills</span> and collaborate with a team to create engaging and <span className='text-[#e77878]'>user-friendly web applications.</span> With a passion for learning and a dedication to staying up-to-date with the latest industry trends, I am confident in my ability to grow and make a positive impact.
                                Thank you for considering my portfolio. <span className='text-[#e77878]'>I look forward to the opportunity to contribute and learn from experienced professionals</span> in the field of web development.</p>

                            <div className='my-2 flex justify-start items-start flex-col w-full'>
                                <h3 className='text-[1.1rem]'>Proficient in HTML, CSS, and JavaScript</h3>

                                <ul>
                                    <li>Extensive knowledge of HTML5 and CSS3 to create semantic and responsive web pages.</li>
                                    <li>Strong understanding of JavaScript for creating interactive and dynamic web experiences.</li>
                                    <li>Experience with popular libraries and frameworks such as Bootstrap and jQuery.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='w-full flex justify-start items-start gap-4 mt-6 flex-col md:flex-row'>
                            <Link to='/skills' className='bg-[#050505a2] px-4 py-2 rounded-[8px] flex justify-center items-center gap-2 border-solid border-[0.5px] border-[#4242427e] transition-colors hover:border-[#844a917e]'>
                                See more
                                <img className='w-5' src="/svg-projects/arrow-img.svg" alt="" />
                            </Link>

                            <div className={`${copy2 === true ? 'border-[#4eac5e]' : 'border-[#4242427e]'} w-[200px] overflow-hidden text-ellipsis whitespace-nowrap bg-[#050505a2] px-4 py-2 rounded-[8px] flex justify-start items-center gap-2 border-solid border-[0.5px] transition-colors cursor-pointer stuff-ellipsis`} onClick={() => copyToClipboard2("zerpaanthony.wx@gmail.com")}>
                                <p className='w-[200px] overflow-hidden text-ellipsis whitespace-nowrap'>{copy2 === true ? 'Text copied!' : 'zerpaanthony.wx@gmail.com'}</p>
                                <img className='w-5' src="/svg-projects/arrow-img.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </motion.section>
    )
}