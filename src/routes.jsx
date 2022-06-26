import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Home from './views/home/index.jsx'
import Header from './components/layouts/header/index.jsx'
import Footer from './components/layouts/footer/index.jsx'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={
                    <div>
                        <Header />
                        <Home />
                        <Footer value="Copyright © 2021 Codever Inc. All rights reserveds." />
                    </div>
                } />
                <Route path="/service" element={
                    <div>
                        <Header />
                        <h1>Hello Wolrd - Services</h1>
                        <Footer value="Copyright © 2021 Codever Inc. All rights reserveds." />
                    </div>
                } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes