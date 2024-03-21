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
            "technologies": [
                'TailwindCSS',
                'HTML',
                'CSS',
                'React',
                'React-router-dom@v6',
                'NextUI'
                ]
        }

    const clinica_id = {
            "id": "plJuwhsT",
            "p_name": "Clínica Genesis",
            "technologies": [
                'TailwindCSS',
                'HTML',
                'CSS',
                'React',
                'React-router-dom@v6'
                ]
        }
    
        const lintted_id = {
            "id": "oKdjYhgS",
            "p_name": "Lintted",
            "technologies": [
              'TailwindCSS',
              'HTML',
              'CSS',
              'React',
              'React-router-dom@v6'
            ]
          };
          
          console.log(lintted_id.technologies);


    return (
        <motion.section className='flex flex-col justify-center items-center' animate={{ opacity: 1}} initial={{ opacity: -100 }} transition={{ duration: 0.8 }} style={{ margin: "30px 0px"}}>
                {param === bitter_id.id ? <ProjectId p_name={bitter_id.p_name} technos={bitter_id.technologies} /> : ""}
                {param === nightcraft_id.id ? <ProjectId p_name={nightcraft_id.p_name} technos={nightcraft_id.technologies}/> : ""}
                {param === clinica_id.id ? <ProjectId p_name={clinica_id.p_name} technos={clinica_id.technologies} /> : ""}
                {param === lintted_id.id ? <ProjectId p_name={lintted_id.p_name} technos={lintted_id.technologies}/> : ""}
        </motion.section>
    )
}