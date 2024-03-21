import './sec-project-brd.css'
import { Link } from 'react-router-dom'

export default function InfoCard({ img_project, description, link_repo, date_repo, d_repo, state_repo, img_p }) {
    return (
                <div className='info-projects'>
                    <div className='info-prj-card'>
                        <div className='img-god'>
                            <div className='border-comp-prj'>
                                <img src={img_project} alt="Project Img File" />
                                {state_repo !== false ? <Link to={"/brd-info-symbols"}><img src='/svg-projects/check-an.svg' alt='Check SVG File'/></Link> : <Link to={"/brd-info-symbols"}><img src='/svg-projects/minus-an.svg' alt='Cross SVG File'/></Link>}
                            </div>

                            <div className='border-comp-prj'>
                                <p className='spn-ant'>{date_repo}</p>
                                <a href={link_repo} target='_blank'><img src="/svg-projects/project-an.svg" alt="Project SVG File"/></a>
                            </div>
                        </div>

                        <div className='prj-desc'>
                            <p>
                            {description}
                            </p>
                        </div>

                        <div className='prj-img-review' style={{ backgroundImage: `url(${img_p})`}}>

                        </div>

                        <div className='prj-desc-2 flex justify-center items-center'>
                            <Link className='god-dm' to={d_repo}>
                                Review  
                            </Link>
                        </div>
                    </div>
                </div>
            )
}