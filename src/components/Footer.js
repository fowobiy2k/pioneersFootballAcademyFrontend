import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io5'
import * as FcIcons from 'react-icons/fc'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import { IconContext } from 'react-icons/lib';

const Footer = () => {
    return (
        <div>
            <IconContext.Provider value={{color:'#fff', size: '1.5em'}}>
            <footer>
                <div className="socials">
                    <a href='https://www.facebook.com/pioneersfootballacademy/'><FaIcons.FaFacebookF /></a>
                    <AiIcons.AiOutlineInstagram />
                    <FaIcons.FaTwitter />
                {/* <a href='https://www.facebook.com/pioneersfootballacademy/' target="_blank"><img src={facebook} alt="Photo" /></a>
                <img src={instagram} alt="Photo" />
                <img src={twitter} alt="Photo" /> */}
                </div>
            </footer>
            </IconContext.Provider>
        </div>
    )
}

export default Footer
