import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Home from './components/pages/home.jsx'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home />} exact />
                <Route path="/service" element={<h1>Hello Wolrd - Services</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes