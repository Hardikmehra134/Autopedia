import img5 from './Hero-Images/3.png';
import './Hero.css';

const HeroSection = () => {
    return ( 
        <>
        <div className='Section'>
            <div className="Page-Logo">
                <a href="https://www.youtube.com/channel/UC-L7bjm4oj3PPU7dZNQA6Qw">
                    <img src={img5} alt="Logo">
                    </img>
                </a>
            </div>
            <div className='Page-Content'>
                <h1>
                    Auto Pedia
                </h1>
                <p>
                Auto-Pedia is a dedicated YouTube platform that brings the latest automobile marvels to your handheld devices by providing reviews, tips, and tricks about all fours and twos out there. The main aim is to review and make the ideal choice of your first or next steering wheel.
                </p>
            </div>
            <div className='Know-btn'>
                    <button className='Know-me'>
                        <a href='https://www.youtube.com/channel/UC-L7bjm4oj3PPU7dZNQA6Qw'>
                            Know Me
                        </a> 
                    </button>
            </div>
        </div>
        </>
     );
}
 
export default HeroSection;