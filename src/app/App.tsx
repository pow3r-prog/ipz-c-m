import HeaderNav from 'components/HeaderNav/HeaderNav'
import HomePage from 'containers/HomePage/HomePage'
import ProjectPage from 'containers/ProjectPage/ProjectPage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
            <Router>
                <HeaderNav />
                <div className='App'>
                    <div className='inner-container'>
                        <Routes>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/projects' element={<ProjectPage />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default App
