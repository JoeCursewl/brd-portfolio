import NavBar from "./App"
import {Route, Routes, Outlet, useParams } from 'react-router-dom'
import AnFooter from "./component-footer/an-footer"
import Main from "./component-info/anthony-main"
import InfoSm from "./component-info-symbols/info-symbols"
import BrdNotes from "./projects-info/brd-notes"
import Projects from "./projects-info/brd-notes"
import { ABout } from "./component-personal/about-an"

export default function App2() {

    return (
        <>
            <NavBar />

            <Routes>
                <Route path="/" element={ <Main/> }/>
                <Route path='/brd-info-symbols' element={<InfoSm />}/>
                <Route path='/projects' element={<BrdNotes /> }/>
                <Route path='/projects/:projectName' element={<h1>Ola</h1> }/>
                    <Route path="details" element={<Projects /> }>
                </Route>
                <Route path="/*" element={<h1>Not found</h1>} />
                <Route path="/about" element={<ABout />} />
            </Routes>

            <AnFooter />
        </>
    )
}