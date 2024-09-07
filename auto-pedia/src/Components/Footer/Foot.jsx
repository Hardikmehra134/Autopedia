import img4 from './Foot-Images/instagram.png';
import img5 from './Foot-Images/linkedin.png';
import img6 from './Foot-Images/skype.png';
import img7 from './Foot-Images/facebook.png';
import './Foot.css';

const Footer = () => {
    return ( 
    <>
    <div className='footer-section'>
    <div className='contentlineup'>
        <div className='col1'>
            <h1>
                Title1
            </h1>
            <ul className='List'>
                <li>Content1</li>
                <li>Content1</li>
                <li>Content1</li>
            </ul>
        </div>
        <div className='col1'>
            <h1>
                Title2
            </h1>
            <ul className='List'>
                <li>Content2</li>
                <li>Content2</li>
                <li>Content2</li>
            </ul>
        </div>
        <div className='col1'>
            <h1>
                Title3
            </h1>
            <ul className='List'>
                <li>Content3</li>
                <li>Content3</li>
                <li>Content3</li>
            </ul>
        </div>
    </div>
    <div className="Social-Media">
        <div className='Insta'>
        <a href='https://www.instagram.com/'>
            <img src={img4}></img>
        
        </a>
        </div>
        <div className='Linkdin'>
            <a href='https://in.linkedin.com'>
                <img src={img5}></img>
            
            </a>
        </div>
        <div className='Skype'>
            <a href='https://www.skype.com/en/'>
                <img src={img6}></img>
            
            </a>
        </div>
        <div className='Facebook'>
            <a href='https://www.facebook.com/'>
                <img src={img7}></img>
        
            </a>
        </div>
    </div>
    </div>
    </>
    );
}
 
export default Footer;