import { useEffect, useState } from 'react'
import './brd-notes.css'
import { Link } from 'react-router-dom'
import { ProjectId } from './bitter/p-bitter'
import { motion } from 'framer-motion'
export default function Projects() {

    const [param, setParam] = useState('')
    const getProjectId = () => {
        const url_params = new URLSearchParams(window.location.search);
        const _id_v = url_params.get('v');
        console.log(_id_v)
        setParam(_id_v)
    }

    useEffect(() => {
        getProjectId();
    }, [param])


    const bitter_id = {
            "id": "XSdlfjew",
            "p_name": "Bitter",
            "description_repo": ["Bitter is an app to jot down anything you want to share with friends or anyone else. Sharing poems and more with links."],
            "technologies": [
                'TailwindCSS',
                'HTML',
                'CSS',
                'React',
                'React-router-dom@v6'
                ]
        }

    const nightcraft_id = {
            "id": "DdijCxqA",
            "p_name": "NightcraftMC",
            "date_repo": "10/23",
            "description_repo": ["Redesign of NightcraftMC's web, using new technologies and opening new spaces, just to offer a different experience."],
            "technologies": [
                'TailwindCSS',
                'HTML',
                'CSS',
                'React',
                'React-router-dom@v6',
                ]
        }

    const clinica_id = {
            "id": "plJuwhsT",
            "p_name": "Clínica Genesis",
            "date_repo": "10/23",
            "description_repo": ["Genesis it's desktop application, built using Tkinter, aims to streamline clinic operations and improve patient care."],
            "technologies": [
                'TailwindCSS',
                'HTML',
                'CSS',
                'React',
                'React-router-dom@v6'
                ]
        }
    
        const brd_id = {
            "id": "oKdjYhgS",
            "p_name": "Brd",
            "date_repo": "10/23",
            "description_repo": ["BRD is a user-friendly and feature-rich application designed to streamline restaurant operations and empower managers. It offers a centralized platform for managing various aspects of your restaurant, from inventory and staff scheduling to customer engagement and table reservations."],
            "second_description": "BRD utilizes Object-Relational Mapping (ORM) technology. An ORM acts as a bridge between your application's programming language (like Python or Java) and the relational database (like MySQL or PostgreSQL) that stores your restaurant's data. This bridge simplifies data access and manipulation by translating between object-oriented structures in your code and the tabular structure of the database.",
            "img_review": "/img-projects/brd-app-cutted.webp",
            "link_repo": "https://github.com/JoeCursewl/brd-dashito",
            "link_deploy": "https://brd.breadriuss.store/login",
            "technologies": [{
                "tecno": "HTML",
                "image": "/technologies/html-img.svg"
            },
            {
                "tecno": "CSS",
                "image": "/technologies/css-img.svg"
            },
            {
                "tecno": "NestJS",
                "image": "/technologies/nest-img.svg"
            },
            {
                "tecno": "React",
                "image": "/technologies/react-img.svg"
            },
            {
                "tecno": "Prisma",
                "image": "/technologies/prisma-img.svg"
            }
            ]
          };


    return (
        <motion.section className='flex flex-col justify-center items-center' animate={{ opacity: 1}} initial={{ opacity: -100 }} transition={{ duration: 0.8 }} style={{ margin: "30px 0px"}}>
                {param === bitter_id.id ? <ProjectId p_name={bitter_id.p_name} technos={bitter_id.technologies} /> : ""}
                {param === nightcraft_id.id ? <ProjectId p_name={nightcraft_id.p_name} technos={nightcraft_id.technologies}/> : ""}
                {param === clinica_id.id ? <ProjectId p_name={clinica_id.p_name} technos={clinica_id.technologies} /> : ""}
                {param === brd_id.id ? <ProjectId p_name={brd_id.p_name} technos={brd_id.technologies} description={brd_id.description_repo} date_repo={brd_id.date_repo} img={brd_id.img_review} link_repo={brd_id.link_repo} description_2={brd_id.second_description} deploy={brd_id.link_deploy}/> : ""}
        </motion.section>
    )
}