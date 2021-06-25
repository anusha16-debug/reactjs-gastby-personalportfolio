import React, { useState } from 'react';
import { Link } from 'gatsby';
import { VscCode } from "react-icons/vsc";

const Navbar = () => {
    const [toggle, setToggle] = useState({
        navbarState: false,
        navbarClass: "collapse navbar-collapse"
    })
    const [menus] = useState([
        {
            id: 1,
            text: "Home",
            url: "/"
        },
        {
            id: 2,
            text: "About",
            url: "/#about"
        },
        {
            id: 3,
            text: "Skills",
            url: "/#skills"
        },
        {
            id: 4,
            text: "Projects",
            url: "/#projects"
        },
        {
            id: 5,
            text: "Resume",
            url: "/#resume"
        },
        {
            id: 6,
            text: "Contact",
            url: "/#contact"
        },
    ])
    const myToggler = () => {
        toggle.navbarState ?  setToggle({
            navbarState: false,
            navbarClass: "collapse navbar-collapse"
        }) :  setToggle({
            navbarState: true,
            navbarClass: "collapse navbar-collapse show"
        }) 
    }
  
    return (
        <nav className="navbar navbar-expand-lg bg-theme text-white fixed-top">
            <Link to="" className="navbar-brand">
                <em className="text-white font-weight-bold"> <VscCode className="logo-icon"></VscCode> AH <VscCode className="logo-icon"></VscCode></em>
            </Link>
            <button className="navbar-toggler" type="button" onClick={myToggler}>
            <span className="text-white">menu</span>
            </button>
            
            <div className={toggle.navbarClass}>
                <ul className="navbar-nav ml-auto mr-5">
                {menus.map(menu => {
                      return (
                        <li key={menu.id} className="nav-item text-uppercase">
                        <Link to={menu.url} className="nav-link text-white">{menu.text}</Link>
                    </li>
                      )
                    })}

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
