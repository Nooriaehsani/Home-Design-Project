import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
const Navbar = () => {
    return ( 
        <div className='navbar'>
           <div className='left'>
                <h2>Laxeas</h2>
           </div>
           <div className='right'>
             <div><Link to="/">Home</Link></div>
            <div><Link to="/AboutUs">AboutUs</Link></div>
            <div><Link to="/Features">Features</Link></div>
            <div><Link to="/Contact">Contact</Link></div>
          </div>
          <div className='last'>
           <MenuIcon/>
          </div>
        </div>
     );
}
 
export default Navbar;