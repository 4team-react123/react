import Nav from "../component/Nav";

import {Outlet} from 'react-router-dom';
function Layout(){
    return(
        <>
            <Nav/>

            <Outlet/>
        </>
    );
}
export default Layout;