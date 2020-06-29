import React from 'react';
import Navbar from '../components/Navbar/Navbar';
const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className="page">
                {children}
            </div>
        </>
    );
}
 
export default Layout;