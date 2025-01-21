import { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"

import Footer from "./components/Footer"
import PrimaryNavigation from "./components/PrimaryNavigation"

import Home from "./pages/Home"
import Cult from "./pages/Cult"
import Random from "./pages/Random"
import About from "./pages/About"
import Bugfix from "./pages/Bugfix"

import NotFound from "./pages/NotFound"

function App() {
    // onload scroll to top
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [navigate])

    return (
        <>
            <div id='page-full-height-setter'>
                <PrimaryNavigation />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cult' element={<Cult />} />
                    <Route path='/random' element={<Random />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/bugfix' element={<Bugfix />} />
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </div>
        </>
    )
}

export default App
