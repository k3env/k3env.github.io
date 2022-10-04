import { AboutPage, IndexPage, PortfolioPage, ProjectsPage } from 'pages'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.scss'
import { Header } from 'components'

function App() {


  return (
    <BrowserRouter>
      <div id="app-root">
        <Header />
        <Outlet />
        <Routes>
          <Route path='/' element={<IndexPage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/projects' element={<ProjectsPage />}></Route>
          <Route path='/portfolio' element={<PortfolioPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
