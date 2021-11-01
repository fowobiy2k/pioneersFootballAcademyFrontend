import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import menu from '../img/menu.svg'
import times from '../img/times-solid.svg'
import kids from '../img/kids.jpg'
import pioLogo from '../img/Pioneers.jpeg'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io5'
import * as FcIcons from 'react-icons/fc'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import { IconContext } from 'react-icons/lib';

const Header = () => {

    // const menuEvent = () => {
    //     let stl = document.getElementById('menu').style.display
    //     if (stl === "none") {
    //         document.getElementById('menu').style.display = 'block'
    //     } else document.getElementById('menu').style.display = 'none'
    // }

    // const hideMenu = () => {

    //     document.getElementById('menu').style.display = 'initial'
    // }

    const [menuStatus, setMenuStatus] = useState(false);

    const toggleMenu = () => { setMenuStatus(!menuStatus) }


    return (
        <div>
            <IconContext.Provider value={{color:'blue'}}>
            <div className='top-background' id='menu'>
                <div className={menuStatus ? 'navbar active' : 'navbar'}>
                    <ul onClick={toggleMenu}>
                        <li><IoIcons.IoHomeSharp className='icon' /><Link className='link' to='/' >Home</Link></li>
                        <li><FcIcons.FcAbout className='icon' /><Link className='link' to='/about' >about</Link></li>
                        <li><RiIcons.RiAdminFill className='icon' /><Link className='link' to='/admin' >admin</Link></li>
                        <li><FaIcons.FaTrophy className='icon' /><Link className='link' to='/pft' >PFT</Link></li>
                        <li><AiIcons.AiFillContacts className='icon' /><Link className='link' to='/contact' >contact</Link></li>
                    </ul>
                    <img className='times-image' src={times} alt="Photo" onClick={toggleMenu} />
                </div>
                <div className="title-box">
                    <div className="title-group">
                        <Link to='/'>
                            <img className='logo-image' src={pioLogo} alt="Photo" />
                            <h1>PFA</h1>
                        </Link>
                    </div>
                    
                    <img className='hamburger' src={menu} alt="Photo" onClick={toggleMenu} />
                </div>
            </div>
            </IconContext.Provider>

        </div>
    )
}

export default Header
