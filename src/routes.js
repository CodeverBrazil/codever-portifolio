import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './views/home/'
import Header from './components/layouts/header/index'
import Footer from './components/layouts/footer/index'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Header />
                    <Home />
                    <Footer value="Copyright © 2021 Codever Inc. All rights reserveds." />
                </Route>

                <Route path="/service" exact>
                    <Header />
                        <h1>Hello Wolrd - Services</h1>
                    <Footer value="Copyright © 2021 Codever Inc. All rights reserveds." />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes