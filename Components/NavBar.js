import React, { useEffect, useState } from "react";


const NavBar = ({ active }) => {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (window) {
            setLoaded(true)
        }
    }, []);

    return <>
        <header>
            <h1>E-Commerce Store</h1>
        </header>
        {loaded ? <nav>
            <a href="/" className={window.location.pathname.includes('category') ? "" : "active"}>Home</a>
            <a href="/category" className={!window.location.pathname.includes('category') ? "" : "active"} >Category</a>
        </nav> : null}

    </>
}

export default NavBar;