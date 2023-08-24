import React from 'react'
import "../App.css";
const NavBar = () => {
    return (
        <>
            <div class="container d-flex justify-content-between ">
               <a class="navbar-brand"><img className='mt-3' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' width="150" height="50" /></a>
                <button className='btn btn-danger float-end   mt-4'>Sign In</button>
            </div>
        </>
    )
}

export default NavBar
