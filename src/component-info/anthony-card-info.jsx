import './sec-project-brd.css'
import { Link } from 'react-router-dom'

export default function InfoCard({ img_project, description, link_repo, date_repo, d_repo, state_repo, img_p }) {
    return (
                <div className='info-projects'>
                    <div className='info-prj-card h-[100%]'>
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

                        <div className='prj-desc p-4 mb-4 max-h-[120px] min-h-[120px] rounded-[12px] overflow-auto text-[#dfdfdf]'>
                            <p className='max-h-[50px]'>
                            {description}
                            </p>
                        </div>

                        <div className='flex justify-center items-center w-[100%] py-4 prj-desc rounded-t-[8px]'>
                            <img className='w-[100px] rounded-[12px]' src={img_p} alt="" />
                        </div>

                        <div className='prj-desc-2 flex justify-center items-center border border-[#180d1d79]'>
                            <Link className='god-dm' to={d_repo}>
                                Review  
                            </Link>
                        </div>
                    </div>
                </div>
            )
}