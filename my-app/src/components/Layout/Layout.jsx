import React from 'react';
import appRoutes from '../../routes/index'
import Header from './Header/Header'
const Layout = () => {
    return (
    <div>
        <div className = "header-items"><Header/></div>
        <div>{appRoutes}</div>
    </div>
    );
}
export default Layout;