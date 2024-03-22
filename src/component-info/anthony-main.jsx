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
                        <a download={true} href={"/files/Anthony Zerpa - Resume - Frontend & Backend Developer.pdf"}
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

                            <div className={`${copy === true ? 'border-[#4eac5e]' : 'border-[#4242427e]'} w-[200px] overflow-hidden text-ellipsis whitespace-nowrap bg-[#050505a2] px-4 py-2 rounded-[8px] flex justify-start items-center gap-2 border-solid border-[0.5px] transition-colors cursor-pointer stuff-ellipsis`} onClick={() => copyToClipboard("brdcontact@breadriuss.store")}>
                                <p className='w-[200px] overflow-hidden text-ellipsis whitespace-nowrap'>{copy === true ? 'Text copied!' : 'brdcontact@breadriuss.store'}</p>
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

                                <div className='flex justify-start items-start gap-2 w-[98%] sm:w-[80%] my-4 border-b py-2 border-solid border-b-[#ffc5c523] flex-col-reverse sm:flex-row'>
                                    <div className='flex justify-center items-center gap-1'>
                                        <img className='w-6' src="/technologies/html-img.svg" alt="HTML SVG File" />
                                        <img className='w-6' src="/technologies/css-img.svg" alt="CSS SVG File" />
                                        <img className='w-6' src="/technologies/js-img.svg" alt="JavaScript SVG File" />
                                    </div>
                                    <h3 className='text-[1.1rem] text-[#fff7f7]'>Proficient in HTML, CSS, and JavaScript</h3>
                                </div>

                                <div className='text-[#fceded] grid gap-2'>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Extensive knowledge of HTML5 and CSS3 to create semantic and responsive web pages.</p>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Strong understanding of JavaScript for creating interactive and dynamic web experiences.</p>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Experience with popular libraries and frameworks such as Bootstrap and jQuery.</p>
                                </div>
                            </div>

                            <div className='my-2 flex justify-start items-start flex-col w-full'>

                                <div className='flex justify-start items-start gap-2 w-[98%] sm:w-[70%] my-4 border-b py-2 border-solid border-b-[#ffc5c523] flex-col-reverse sm:flex-row'>
                                    <div className='flex justify-start items-center gap-2'>
                                        <img className='w-6' src="/technologies/css-img.svg" alt="CSS SVG File" />
                                        <img className='w-6' src="/technologies/tailwind-img.svg" alt="TailwindCSS SVG File" />
                                    </div>

                                    <h3 className='text-[1.1rem] text-[#fff7f7]'>Responsive Web Design:</h3>
                                </div>

                                <div className='text-[#fceded] grid gap-2'>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Ability to design and develop websites that adapt seamlessly to different screen sizes and devices.</p>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Familiarity with CSS media queries and responsive design principles.</p>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Understanding of mobile-first development approach to ensure optimal user experience on mobile devices.</p>
                                </div>
                            </div>

                            <div className='my-2 flex justify-start items-start flex-col w-full'>

                                <div className='flex justify-start items-start gap-2 w-[98%] sm:w-[70%] my-4 border-b py-2 border-solid border-b-[#ffc5c523] flex-col-reverse sm:flex-row'>
                                    <div className='flex justify-center items-center gap-1'>
                                        <img className='w-6' src="/technologies/react-img.svg" alt="React.js SVG File" />
                                        <img className='w-6' src="/technologies/vue-img.svg" alt="Vue.js SVG File" />
                                        <img className='w-6' src="/technologies/astro-img.svg" alt="Astro SVG File" />
                                    </div>
                                    <h3 className='text-[1.1rem] text-[#fff7f7]'>Front-End Frameworks:</h3>
                                </div>

                                <div className='text-[#fceded] grid gap-2'>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Experience with front-end frameworks like React, Vue.js, or Astro.</p>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Understanding of component-based architecture and single-page application development.</p>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Knowledge of state management libraries like Redux or Vuex.</p>
                                </div>
                            </div>

                            <div className='my-2 flex justify-start items-start flex-col w-full'>

                                <div className='flex justify-start items-start gap-2 w-[98%] sm:w-[70%] my-4 border-b py-2 border-solid border-b-[#ffc5c523] flex-col-reverse sm:flex-row'>
                                    <div className='flex justify-center items-center gap-2'>
                                        <img className='w-6' src="/technologies/nest-img.svg" alt="NestJS SVG File" />
                                        <img className='w-6' src="/technologies/db-img.svg" alt="Database PostgreSQL SVG File" />
                                        <img className='w-6' src="/technologies/nodejs-img.svg" alt="Node.js SVG File" />
                                        <img className='w-6' src="/technologies/mongodb-img.svg" alt="MongoDB SVG File" />
                                    </div>
                                    <h3 className='text-[1.1rem] text-[#fff7f7]'>Back-End Development:</h3>
                                </div>

                                <div className='text-[#fceded] grid gap-2'>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Familiarity with server-side programming languages such as Node.js</p>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Understanding of RESTful APIs and client-server communication.</p>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Basic knowledge of working with databases using SQL or NoSQL.</p>
                                </div>
                            </div>

                            <div className='my-2 flex justify-start items-start flex-col w-full'>

                                <div className='flex justify-start items-start gap-2 w-[98%] sm:w-[70%] my-4 border-b py-2 border-solid border-b-[#ffc5c523] flex-col-reverse sm:flex-row'>
                                    <div className='flex justify-center items-center gap-2'>
                                        <img className='w-6' src="/technologies/github-img.svg" alt="Github SVG File" />
                                        <img className='w-6' src="/technologies/git-img.svg" alt="Git SVG File" />
                                    </div>
                                    <h3 className='text-[1.1rem] text-[#fff7f7]'>Version Control and Collaboration:</h3>
                                </div>

                                <div className='text-[#fceded] grid gap-2'>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Proficient in using Git for version control and collaboration in a team environment.</p>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Experience with platforms like GitHub or Bitbucket for code repository management.</p>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Understanding of Git workflows, learning branching, and merging code changes.</p>
                                </div>
                            </div>

                            <div className='my-2 flex justify-start items-start flex-col w-full'>

                                <div className='flex justify-start items-center gap-2 w-[98%] sm:w-[70%] my-4 border-b py-2 border-solid border-b-[#ffc5c523]'>
                                    <img className='w-6 rounded-[100%]' src="/cursewl_img.jpg" alt="Cursewl  File Image" />
                                    <h3 className='text-[1.1rem] text-[#fff7f7]'>Currently learning:</h3>
                                </div>

                                <div className='text-[#fceded] grid gap-2'>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />I started the process of learning Astro, this framework web has given me a good experience, I'm the road to learn everything about it.</p>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Redis: I'm excited to learn everything about this database, it's part of my roadmap this year.</p>
                                    <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Data science with Python, using libraries like Pandas, Numpy, Plotly.</p>
                                </div>
                            </div>
                        </div>



                        <div className='w-full flex justify-start items-start gap-4 mt-6 flex-col md:flex-row'>

                            <div className={`${copy2 === true ? 'border-[#4eac5e]' : 'border-[#4242427e]'} w-[200px] overflow-hidden text-ellipsis whitespace-nowrap bg-[#050505a2] px-4 py-2 rounded-[8px] flex justify-start items-center gap-2 border-solid border-[0.5px] transition-colors cursor-pointer stuff-ellipsis`} onClick={() => copyToClipboard2("brdcontact@breadriuss.store")}>
                                <p className='w-[200px] overflow-hidden text-ellipsis whitespace-nowrap'>{copy2 === true ? 'Text copied!' : 'brdcontact@breadriuss.store'}</p>
                                <img className='w-5' src="/svg-projects/arrow-img.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </motion.section>
    )
}