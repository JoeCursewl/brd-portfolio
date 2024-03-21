import './info-symbols.css'
import { Button } from '@nextui-org/react'

export default function InfoSm() {
    return (
        <section className='info-s-all'>
            <div className='info-s'>

                <div>
                    <h1 style={{ fontSize: "1.5rem", color: "#EABFFF"}}>Project status</h1>
                </div>

                <div className="s-desc-sn">
                    <div className='flex justify-start items-center gap-4'>
                        <img src="/svg-projects/check-an.svg" alt="WIP SVG File" />
                        <p>Project has been completed</p>
                    </div>

                    <div>
                        <Button color='primary'>
                            More info
                        </Button>
                    </div>
                </div>

                <div className='s-desc-sn'>
                    <div className='flex justify-start items-start gap-4 w-full'>
                        <img src="/svg-projects/cross-an.svg" alt="WIP SVG File" />
                        <p>Project skipped or not completed</p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <Button color='primary'>
                            More info
                        </Button>
                    </div>
                </div>

                <div className='s-desc-sn'>
                    <div className='flex justify-start items-center gap-4'>
                        <img src="/svg-projects/minus-an.svg" alt="WIP SVG File" />
                        <p>Project WIP (Work in progress)</p>
                    </div>

                    <div>
                        <Button color='primary'>
                            More info
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    )
}