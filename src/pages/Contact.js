import johnpic from '../Asset/photo/Ahmad.jpg';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact">
            
            <div className='contact-col'>
            <div className='box'>
                <div className='format'><FormatQuoteIcon/></div>
                <p>The services provides is very <br/>and friendly. The results given<br/>very very satisfying</p>
                </div>
            <di>
               <img src={johnpic} />
            </di>
            <div className="contact-right">
                <h1>Our Customers<br/>Feedback.</h1>
                <p>Find beautiful home interior designs, complate home<br/>interior solution. An interior designer is someone<br/> who plans , researches, coordinates.</p>
            </div>
            </div>
           <div className='down-col'>
            <h1>Subscribe To Get The Latest<br/>News About Us.</h1>
            
            <div className='buttom-col'>
                <p>we recommended you to subscribe to our newspaper, Enter your email<br/>below to get our daily update about us.</p>
                <div className='subscribe'>
                 <input type="text" email="email" placeholder='Find your email address'></input>
                 <button>Subscribe</button>
                 
                </div>

             
            </div>
           </div>
      


        </div>
      );
}
 
export default Contact;