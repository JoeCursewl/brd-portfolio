import './sec-project-brd.css'
import { motion } from 'framer-motion'
import InfoCard from './anthony-card-info'

export default function ProjectsBrd() {
    var infoCard = "Breadriuss it's a upcoming project that we're developing"

    const info_projects = 
    [
        {
            "img_project": "/cursewl_img.jpg",
            "link_repo": "https://github.breadriuss.store",
            "date_repo": "05/23",
            "description_repo": ["Bitter is an app to jot down anything you want to share with friends or anyone else. Sharing poems and more with links."],
            "d_repo": "/projects?v=XSdlfjew",
            "status_repo": true,
            "img_review": "/img-projects/bitter-img.webp",
            "id": 13345
        },
        {
            "img_project": "/cursewl_img.jpg",
            "link_repo": "https://github.breadriuss.store",
            "date_repo": "07/23",
            "description_repo": ["Redesign of NightcraftMC's web, using new technologies and opening new spaces, just to offer a different experience."],
            "d_repo": "/projects?v=DdijCxqA",
            "status_repo": true,
            "img_review": "/img-projects/nightcraft.webp",
            "id": 647896
        },
        {
            "img_project": "/cursewl_img.jpg",
            "link_repo": "https://github.breadriuss.store",
            "date_repo": "08/22",
            "description_repo": ["Genesis it's desktop application, built using Tkinter, aims to streamline clinic operations and improve patient care."],
            "d_repo": "/projects?v=plJuwhsT",
            "status_repo": true,
            "img_review": "/img-projects/genesis.webp",
            "id": 74874
        },
        {
            "img_project": "/cursewl_img.jpg",
            "link_repo": "https://github.breadriuss.store",
            "date_repo": "10/23",
            "description_repo": ["BRD is a user-friendly and feature-rich application designed to streamline restaurant operations and empower managers. It offers a centralized platform for managing various aspects of your restaurant, from inventory and staff scheduling to customer engagement and table reservations."],
            "d_repo": "/projects?v=oKdjYhgS",
            "status_repo": true,
            "img_review": "/img-projects/brd-app-cutted.webp",
            "id": 63748
        }
    ]
    
    return (
        <motion.section animate={{ opacity: 1, filter: blur(10) }} initial={{ opacity: 0 }} transition={{ duration: 2.5 }} className='sec-projects'>
            <div className='flex justify-center items-center text-[1.5rem] border border-solid border-[#bc78d449] py-2 mb-5 rounded-[12px]'>
                <h2>Projects</h2>
            </div>

            <div>
                <h2 className='text-[1.5rem]'>
                    Here you can find <span className='spn-dvp'>projects</span> that I've worked on or am currently working with a brief <span className='spn-ant'>description.</span>
                </h2>
            </div>

            <div className='inf-all-cards-prj'>
                {info_projects !== undefined ? info_projects.map((brd) => (
                    <InfoCard key={brd.id} img_project={brd.img_project} link_repo={brd.link_repo} date_repo={brd.date_repo} description={brd.description_repo} d_repo={brd.d_repo} state_repo={brd.status_repo} img_p={brd.img_review}/>
                )) : ""}
            </div>

        </motion.section>
    )
}