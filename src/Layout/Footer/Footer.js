import './Footer.css';
import Location from '@mui/icons-material/Room';
import Phone from '@mui/icons-material/PhoneRounded' ;
import Email from '@mui/icons-material/Email';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='footer-top'>
                    <div >
                        <div className='icon'><Location/></div>
                        <p>61 west shamli kabul,<br/>Newyork</p>
                    </div>
                    <div>
                        <div className='icon'><Email/></div>
                        <p>interior@gmail.com</p>
                    </div>
                    <div>
                        <div className='icon'><Phone/></div>
                        <p>+467298854888</p>
                    </div>
                </div>
                <div className='middle'>
                    <p>Due to difference in marketing, process and design fideilty, it is possible that a <br/>
                    prototype may fall to perform acceptability wherease the production design <br/>may have been sound</p>
                    <hr></hr>

                </div>
                <div className='footer-down'>
                    <Facebook/>
                    <Twitter/>
                    <LinkedIn/>
                    <Email/>
                </div>

            </div>
        </div>
      );
}
 
export default Footer;
