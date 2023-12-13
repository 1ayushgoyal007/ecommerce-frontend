import React from "react";


const NavBar = ({ active }) => {
    return <>
        <header>
            <h1>E-Commerce Store</h1>
        </header>

        <nav>
            <a href="/" className="active">Home</a>
            <a href="/category">Category</a>
        </nav>
    </>
}

export default NavBar;