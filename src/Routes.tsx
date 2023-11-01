import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './home/Home'

interface Props  {}

function Routes({}: Props) {
  return (
    <div>
         <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
    </div>
  )
}

export default Routes