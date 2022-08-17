import './navbar.css'
import Logo from '../Logo/logo';
import profileImg from '../../songs_images/profile_img.jpg'

function Navbar(props) {
  
  return (
 
    <div className={props.className} >
        <Logo/>
        <div className='navbar--nav'>
            <ul>
                <li className='nav-tag'>For You</li>
                <li className='nav-tag'>Tracks</li>
                <li className='nav-tag'>Favorite</li>
                <li className='nav-tag'>Recently Played</li>
            </ul>
        </div>
    <div >
        <img src={profileImg} roundedCircle className='profile-img'/>
    </div>
    </div>
    
  );
}

export default Navbar;