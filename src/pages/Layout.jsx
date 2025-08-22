import React from "react"
import {Link,Outlet} from 'react-router-dom' 
function Layout(){
    return(
        <>
        <section> 
            <div className="Wrap">
                <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'about'}>About</Link>
                <Link to={'Contact'}>Contact</Link>
            </nav> 
            </div>
            
            <div className="page">
                <Outlet/>
            </div>
        </section>
        </>
        
         )
}
export default Layout