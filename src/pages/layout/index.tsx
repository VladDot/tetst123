import {Outlet} from "react-router-dom";

export const Layout =()=>{
    return(
        <>
            <h1>header</h1>
            <Outlet/>
            <h1>footer</h1>
        </>
    )
}