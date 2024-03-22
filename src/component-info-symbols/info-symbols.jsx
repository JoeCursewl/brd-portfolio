import './info-symbols.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function InfoSm() {
    return (
        <motion.section className='info-s-all' animate={{ opacity: 1 }} initial={{ opacity: -100 }} transition={{ duration: 0.8 }}>
            <div className='info-s'>

                <div>
                    <h1 style={{ fontSize: "1.5rem", color: "#EABFFF"}}>Project status</h1>
                </div>

                <div className="s-desc-sn">
                    <div className='flex justify-start items-center gap-4'>
                        <img src="/svg-projects/check-an.svg" alt="WIP SVG File" />
                        <p>Project has been completed</p>
                    </div>

                    <div>
                        <span></span>
                    </div>
                </div>

                <div className='s-desc-sn'>
                    <div className='flex justify-start items-start gap-4 w-full'>
                        <img src="/svg-projects/cross-an.svg" alt="WIP SVG File" />
                        <p>Project skipped or not completed</p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <span></span>
                    </div>
                </div>

                <div className='s-desc-sn'>
                    <div className='flex justify-start items-center gap-4'>
                        <img src="/svg-projects/minus-an.svg" alt="WIP SVG File" />
                        <p>Project WIP (Work in progress)</p>
                    </div>

                    <div>
                        <span></span>
                    </div>
                </div>

                <div>
                    <Link to={"/"} className='hover:text-[#ffbfbf] transition-all bg-[#0707076e] px-4 py-2 text-[0.9rem] border-transparent border-[1px] hover:border-[#2d1b33] rounded-[8px]'>Back to home</Link>
                </div>

            </div>
        </motion.section>
    )
}