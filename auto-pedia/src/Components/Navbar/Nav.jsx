import img1 from './Nav-Images/3.png';
import img2 from "./Nav-Images/youtube.png";
import img3 from './Nav-Images/instagram.png';
import img4 from './Nav-Images/email.png';

import './Nav.css'

const Navbar = () => {
    return ( 
    <div className='Bar'>
        <div className='Nav-Logo'>
            <div className="Logo">
            <a href='https://www.youtube.com/channel/UC-L7bjm4oj3PPU7dZNQA6Qw'>
                <img src={img1} alt="Logo"></img>
            </a>
            </div>
            <div className='Title'>
                <h1>
                    Auto Pedia
                </h1>
            </div>
        </div>
        <div className='Social-handels'>
            <div className='YouTube'>
            <a href='https://www.youtube.com/channel/UC-L7bjm4oj3PPU7dZNQA6Qw'>
                <img src={img2} alt="Youtube"></img>
            </a>
            </div>
            
            <div className='Instagram'>
            <a href='https://www.instagram.com/autopedia202/'>
                <img src={img3} alt="instagram"></img>
            </a>
            </div>
            
            <div className='Contact'>
            <a href='mailto:autopedia2002@gmail.com?'>
                <img src={img4} alt="Contact"></img>
            </a>
            </div>
        </div>
    </div>
     );
}
 
export default Navbar;