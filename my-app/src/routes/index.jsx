import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from '../containers/Home/Home'
import Catalog from '../containers/Catalog/Catalog'

const appRoutes = (
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Catalog} path='/catalog' />
    </Switch>
);
export default appRoutes;