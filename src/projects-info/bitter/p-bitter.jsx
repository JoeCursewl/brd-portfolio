import './p-bitter.css'
export function ProjectId({ p_name, technos, notasAll }) {
    return (
        <section className="all-content-project">
            <div className="all-project">

                <div className="header-project">
                    <div className='info-antho'>
                        <img src="/cursewl_img.jpg" alt="Bitter WEBP File" />
                        <h1>Anthony Zerpaaa</h1>
                    </div>
                    <p>{p_name}</p>
                </div>

                <div className='description-project'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non culpa nesciunt harum odit 
                        neque quaerat obcaecati veniam suscipit consequuntur dolor error, dolorem, voluptatibus 
                        illum, blanditiis quae. Quod maiores minima reiciendis Non culpa nesciunt harum odit 
                        neque quaerat obcaecati veniam suscipit consequuntur dolor error, dolorem, voluptatibus 
                        illum, blanditiis quae. Quod maiores minima reiciendis?
                    </p>

                    <div>
                        <h2>Technologies used</h2>

                        <div className='flex gap-2 justify-start items-center py-4'>
                            {
                                technos.map((tech) => (
                                    <p key={tech}>{tech}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>  
        </section>
    )
}