import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return ( 
        <div className='navbar'>
           <div className='left'>
                left
           </div>
           <div className='right'>
             <div><Link to="/">Home</Link></div>
            <div><Link to="/AboutUs">AboutUs</Link></div>
            <div><Link to="/Features">Features</Link></div>
            <div>Contat</div></div>
        </div>
     );
}
 
export default Navbar;