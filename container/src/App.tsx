import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import { Home, Navbar, Sidebar } from './components'
import { useAppContext } from './contexts/AppContext'

const Dashboard = React.lazy(() => import('app1/Dashboard'))
const Hub = React.lazy(() => import('app2/Hub'))

const App = () => {
  const { isOpen } = useAppContext()

  return (
    <>
    <Suspense fallback={null}>
      <Nav>
        <Navbar />
      </Nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/hub' element={<Hub />} />
        </Routes>
    </Suspense>
    {isOpen && <Sidebar />}
    </>
  )
}

const Nav = styled('div')`
  position: static;
  top: 0;
  left: 0;
`

export default App