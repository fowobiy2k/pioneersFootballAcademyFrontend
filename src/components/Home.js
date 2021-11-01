import { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import pic from '../img/pic2.jpg'
import menu from '../img/menu.svg'
import times from '../img/times-solid.svg'
import kids from '../img/kids.jpg'
import pioLogo from '../img/Pioneers.jpeg'
import celebration from '../img/celebration.jpg'
import pexel1 from '../img/pexel1.jpg'
import pexel2 from '../img/pexel2.jpg'
import pix from '../img/pix.jpg'
import pixx from '../img/pixx-resize.jpg'
import facebook from '../img/icon_facebook.svg'
import instagram from '../img/icon_insta.svg'
import twitter from '../img/icon_twitter.svg'
import { Link } from 'react-router-dom'

const Home = ({ fixtures }) => {


    return (
        <div>

            <div className="full-name">
                <span>Pioneers</span> <span>Football</span> <span>Academy</span>
            </div>

            <div className="team-pic">
                {/* <img src={kids} alt="Photo" /> */}
                <img src={pix} alt="Photo" />
            </div>

            <div className="msg-block-container">
                <div className="msg-block">
                    <img src={celebration} alt="Photo" />
                    {/* <img src={pixx} alt="Photo" /> */}
                    <div className="text">
                        <Link to='#'>
                            <h3 className='main-text'>enrol now</h3>
                            <p className='desc'>join the best football academy in town</p>
                        </Link>

                    </div>
                </div>

                <div className="msg-block">
                    <img src={pexel2} alt="Photo" />
                    <div className="text">
                        <Link to='#'>
                            <h3 className='main-text'>our mission</h3>
                            <p className='desc'>we provide intensive training program in a friendly atmosphere</p>
                        </Link>

                    </div>
                </div>
            </div>

            <div className="schedule">
                <p>upcoming fixtures</p>
                <div className="schedule-box">
                    {fixtures && fixtures.map(fixture => {
                        return <div className="detail-group">
                            <div className="date">{fixture.date}</div>
                            <div className="details">
                                <div className="opponent">{fixture.opponent}</div>
                                <div className="venue">{fixture.venue}</div>
                                <div className="time">{fixture.time}</div>
                            </div>

                        </div>
                    })}
                </div>

            </div>

        </div>
    )
}

export default Home
