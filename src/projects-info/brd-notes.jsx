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
        "date_repo": "05/23",
        "description_repo": "Bitter is an app where anyone can share anything, simply. Jot down poems, thoughts, or anything else want to share with friends or the world. Poeple can express themselves visually with images. Save their creations and share them with friends or the world using a unique link.",
        "second_description": "Built on React using react-router-dom@v6 and TailwindCSS to style frontend, and the backend is built on NestJS using a famous (Object-Relational Mapping) ORM Prisma, to manage the database using resources for every endpoint.",
        "img_review": "/img-projects/bitter-img.webp",
        "status_project": "/svg-projects/check-an.svg",
        "private_repo": true,
        "link_repo": "https://github.com/JoeCursewl",
        "link_deploy": "https://love.brdbitter.store",
        "technologies": [{
            "tecno": "React",
            "image": "/technologies/react-img.svg"
        },
        {
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
            "tecno": "Prisma",
            "image": "/technologies/prisma-img.svg"
        },
        {
            "tecno": "PostgreSQL",
            "image": "/technologies/db-img.svg"
        },
        {
            "tecno": "Firebase",
            "image": "/technologies/firebase-img.svg"
        }
        ]
    }

    const nightcraft_id = {
        "id": "DdijCxqA",
        "p_name": "NightcraftMC",
        "date_repo": "07/23",
        "description_repo": ["Introducing the remarkable overhaul of NightcraftMC's website, a stunning redesign that goes beyond the ordinary and embraces cutting-edge technologies to create an unparalleled user experience."],
        "second_description": "Harnessing the power of React and the elegance of TailwindCSS, this meticulously crafted website takes immersive gameplay to new heights. With React's dynamic and responsive capabilities, every element seamlessly adapts to your every click, ensuring a fluid and engaging interaction. Meanwhile, TailwindCSS brings forth a visually striking aesthetic, with its meticulously designed components and intuitive styling options, creating a truly immersive experience that will leave you breathless.",
        "img_review": "/img-projects/nightcraft.webp",
        "link_repo": "https:/github.com/JoeCursewl/nightcraft-web-update",
        "link_deploy": "https://www.nightcraft.org",
        "status_project": "/svg-projects/check-an.svg",
        "private_repo": false,
        "technologies": [
            {
                "tecno": "HTML",
                "image": "/technologies/html-img.svg"
            },
            {
                "tecno": "CSS",
                "image": "/technologies/css-img.svg"
            },
            {
                "tecno": "React",
                "image": "/technologies/react-img.svg"
            },
            {
                "tecno": "NextUI",
                "image": "/technologies/theme-img.svg"
            },
            {
                "tecno": "TailwindCSS",
                "image": "/technologies/tailwind-img.svg"
            }
        ]
    }

    const clinica_id = {
        "id": "plJuwhsT",
        "p_name": "Clínica Genesis",
        "date_repo": "08/22",
        "description_repo": ["Genesis it's desktop application, built using Tkinter, aims to streamline clinic operations and improve patient care."],
        "second_description": "Genesis, a user-friendly Tkinter desktop application for clinics, some functions designed to improve patient care. Appointment scheduling, billing, and reporting are just a few features that empower healthcare professionals to focus on what matters most – their patients' well-being.",
        "img_review": "/img-projects/genesis.webp",
        "link_repo": "https://github.com/JoeCursewl/control-de-clinica-genesis",
        "link_deploy": "https://github.com/JoeCursewl/control-de-clinica-genesis",
        "status_project": "/svg-projects/check-an.svg",
        "private_repo": false,
        "technologies": [{
            "tecno": "Python",
            "image": "/technologies/python-img.svg"
        },
        {
            "tecno": "Tkinter",
            "image": "/technologies/python-img.svg"
        },
        {
            "tecno": "MySQL",
            "image": "/technologies/db-img.svg"
        }
        ]
    };

    const brd_id = {
        "id": "oKdjYhgS",
        "p_name": "Brd",
        "date_repo": "10/23",
        "description_repo": ["BRD is a user-friendly and feature-rich application designed to streamline restaurant operations and empower managers. It offers a centralized platform for managing various aspects of your restaurant, from inventory and staff scheduling to customer engagement and table reservations."],
        "second_description": "BRD utilizes Object-Relational Mapping (ORM) technology. An ORM acts as a bridge between your application's programming language (like Python or Java) and the relational database (like MySQL or PostgreSQL) that stores your restaurant's data. This bridge simplifies data access and manipulation by translating between object-oriented structures in your code and the tabular structure of the database.",
        "img_review": "/img-projects/brd-app-cutted.webp",
        "link_repo": "https://github.com/JoeCursewl/brd-dashito",
        "link_deploy": "https://ordereffortless.com/login",
        "status_project": "/svg-projects/check-an.svg",
        "private_repo": true,
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
        },
        {
            "tecno": "PostgreSQL",
            "image": "/technologies/db-img.svg"
        },
        {
            "tecno": "Nginx X",
            "image": "/technologies/nginx-img.svg"
        }
        ]
    };


    return (
        <motion.section className='flex flex-col justify-center items-center' animate={{ opacity: 1 }} initial={{ opacity: -100 }} transition={{ duration: 0.8 }} style={{ margin: "30px 0px" }}>
            {param === bitter_id.id ? <ProjectId p_name={bitter_id.p_name} technos={bitter_id.technologies} description={bitter_id.description_repo} description_2={bitter_id.second_description} img={bitter_id.img_review} date_repo={bitter_id.date_repo} status_project={bitter_id.status_project} deploy={bitter_id.link_deploy} link_repo={bitter_id.link_repo} isPrivate={bitter_id.private_repo}/> : ""}
            {param === nightcraft_id.id ? <ProjectId p_name={nightcraft_id.p_name} technos={nightcraft_id.technologies} deploy={nightcraft_id.link_deploy} date_repo={nightcraft_id.date_repo} status_project={nightcraft_id.status_project} img={nightcraft_id.img_review} description={nightcraft_id.description_repo} description_2={nightcraft_id.second_description} link_repo={nightcraft_id.link_repo} /> : ""}
            {param === clinica_id.id ? <ProjectId p_name={clinica_id.p_name} technos={clinica_id.technologies} description={clinica_id.description_repo} img_project={clinica_id.img_review} deploy={clinica_id.link_deploy} status_project={clinica_id.status_project} date_repo={clinica_id.date_repo} img={clinica_id.img_review} description_2={clinica_id.second_description} link_repo={clinica_id.link_repo} /> : ""}
            {param === brd_id.id ? <ProjectId p_name={brd_id.p_name} technos={brd_id.technologies} description={brd_id.description_repo} date_repo={brd_id.date_repo} img={brd_id.img_review} link_repo={brd_id.link_repo} description_2={brd_id.second_description} deploy={brd_id.link_deploy} status_project={brd_id.status_project} isPrivate={brd_id.private_repo} /> : ""}
        </motion.section>
    )
}