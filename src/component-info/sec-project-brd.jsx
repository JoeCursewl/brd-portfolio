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
            "date_repo": "08/23",
            "description_repo": ["Bitter is an app to jot down anything you want to share with friends or anyone else."],
            "d_repo": "/projects?v=XSdlfjew",
            "status_repo": false,
            "img_review": "/img-projects/bitter-img.webp",
            "id": 13345
        },
        {
            "img_project": "/cursewl_img.jpg",
            "link_repo": "https://github.breadriuss.store",
            "date_repo": "10/23",
            "description_repo": ["Redesign of NightcraftMC's web, using new technologies and opening new spaces."],
            "d_repo": "/projects?v=DdijCxqA",
            "status_repo": true,
            "img_review": "/img-projects/nightcraft.webp",
            "id": 647896
        },
        {
            "img_project": "/cursewl_img.jpg",
            "link_repo": "https://github.breadriuss.store",
            "date_repo": "10/23",
            "description_repo": ['"Genesis" is an app to store data and control sta'],
            "d_repo": "/projects?v=plJuwhsT",
            "status_repo": true,
            "img_review": "/cursewl_img.jpg",
            "id": 74874
        },
        {
            "img_project": "/cursewl_img.jpg",
            "link_repo": "https://github.breadriuss.store",
            "date_repo": "10/23",
            "description_repo": ["BRD Notes it's an aplication that makes sense in the aspect of writing"],
            "d_repo": "/projects?v=oKdjYhgS",
            "status_repo": true,
            "img_review": "/cursewl_img.jpg",
            "id": 63748
        }
    ]
    
    return (
        <motion.section animate={{ opacity: 1, filter: blur(10) }} initial={{ opacity: 0 }} transition={{ duration: 2.5 }} className='sec-projects'>
            <div className='an-project-tl'>
                <h2>Projects</h2>
            </div>

            <div>
                <h2 className='tl-brd-prjs'>
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