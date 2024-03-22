import { motion } from 'framer-motion'

export function ABout() {
    return (
        <motion.section animate={{ opacity: 1 }} initial={{ opacity: -100 }} transition={{ duration: 0.5}} className="w-full flex justify-center items-center min-h-[100vh]">
            <div className="w-[65%]">

                <div className='my-2 flex justify-start items-start flex-col w-full'>

                    <div className='flex justify-start items-center gap-2 w-[98%] sm:w-[70%] my-4 border-b py-2 border-solid border-b-[#ffc5c523]'>
                        <img className='w-6 rounded-[100%]' src="/cursewl_img.jpg" alt="Cursewl File Image" />
                        <h3 className='text-[1.1rem] text-[#fff7f7]'>About me</h3>
                    </div>

                    <div className='text-[#fceded] grid gap-1'>
                        <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Hi there! 👋 I'm Anthony Zerpa, a highly motivated Frontend & Backend developer with a passion for delovoping new stuff. I bring 2 years of experience to the table, and I'm always eager to learn and grow. I'm particularly interested in Web development. In my free time, you might find me producing music and probably designing. Let's connect and discuss how I can contribute to your team!</p>
                        <p className='flex justify-start items-center gap-2'><img className='w-5' src="/svg-projects/code-img.svg" alt="Code SVG File" />Familiarity with CSS media queries and responsive design principles.</p>
                    </div>
                </div>


            </div>
        </motion.section>
    )
}