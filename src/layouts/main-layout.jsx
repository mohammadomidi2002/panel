import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

    const [collapseSidebar, setCollapseSidebar] = useState(false)
  return (
    <div className='wrapper' style={{minHeight: '100h'}}>
        <nav className={`sidebar ${collapseSidebar ? 'collapsed' : ''}`}>

        </nav>
        <div className='main'>
            <nav className='navbar'>
                <a className='sidebar-toggle' onClick={() => setCollapseSidebar(!collapseSidebar)}>
                    <i className='hamburger align-self-center'></i>
                </a>
                </nav>
                <main className='content'>

                </main>
                <footer className='footer'>

                </footer>
        </div>
      {/* <Outlet/> */}
    </div>
  )
}

export default MainLayout
