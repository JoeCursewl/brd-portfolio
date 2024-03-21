import './p-bitter.css'
export function ProjectId({ p_name, technos, notasAll, description, date_repo, img, link_repo, img_project, description_2, deploy }) {
    return (
        <section className="all-content-project">
            <div className="all-project">

                <div className="flex justify-between items-start w-full flex-col md:flex-row gap-2">
                    <div className='flex justify-center items-center gap-3'>
                        <img className='w-[30px] rounded-[100%]' src="/cursewl_img.jpg" alt="Bitter WEBP File" />
                        <h1>Anthony Zerpa</h1>
                    </div>

                    <div>
                        <a href="https://github.com/JoeCursewl" target='_blank' className='u-link'>repository</a>
                    </div>
                </div>

                <div className='flex justify-center flex-col items-start gap-6 text-[#ccc]'>
                    <p>
                        {description}
                    </p>

                    <p>
                        {description_2}
                    </p>

                    <div className='flex justify-start items-start w-[100%] flex-col gap-3'>
                        <div className='flex justify-between items-center gap-4 bg-[#07070741] rounded-[12px] border border-solid border-[#4e4e4e1e] hover:border-[#e79b9b34] transition-colors'>
                            <img className='w-[50px] rounded-[12px]' src={img} alt="Nightcraft Webp File" />

                            <h2>{date_repo}</h2>

                            <p>{p_name}</p>

                            <div className='flex justify-center items-center'>
                                <a href={link_repo} target='_blank' className='bg-[#000] px-2'>View code</a>
                            </div>
                        </div>

                        <div className='text-[#c96262d0] flex justify-between items-center gap-2 bg-[#07070741] px-4 py-2 rounded-[12px] border border-solid border-[#4e4e4e1e] hover:border-[#e79b9b34] transition-colors'>
                            <p className='max-w-[250px] text-ellipsis overflow-hidden'>{deploy || "Not link provied"}</p>
                            <a href={deploy} target='_blank'><img className='w-4 opacity-[0.8]' src="/svg-projects/arrozito-img.svg" alt="SVG File" /></a>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-6 flex-col w-full'>
                        <div className='flex justify-center items-center gap-2 text-[#f6f3f7]'>
                            <img className='w-[20px]' src="/svg-projects/techno-img.svg" alt="SVG File" />
                            <h2>Technologies used</h2>
                        </div>

                        <div className='grid grid-cols-2 gap-3 w-full sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                            {
                                technos.map((tech) => (
                                    <p key={tech.tecno} className='bg-[#07070777] flex justify-center items-center gap-2 px-3 p-2 rounded-[8px] border border-solid border-[#63636334] hover:border-[#e79b9b34] transition-colors w-full'>
                                        <img className='w-5' src={tech.image} alt="Tecnology SVG File" />
                                        {tech.tecno}
                                        </p>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}