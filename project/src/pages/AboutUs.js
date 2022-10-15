import Picture from '../Asset/photo/chair.jpg';
import './AboutUs.css';
const AboutUs = () => {
    return ( 
        <div>
            <div className='all'>
                
                <img src={Picture}></img>
                
                <div className='about'>
                    <h1>We Provide You The<br/> Best Experience.</h1>
                    <p>interior design is the art and science of enhancing <br/>
                    the interiorof a building to achive a healthier & more <br/>
                    aesthetically pleasing envoirnment. </p>
                    <p>Interior Design Companies Usa -Quick And Easily Found<br/>
                    At Asksly!Many Products.Easy Acces.Quick Results.</p>
                    <button>Learn More</button>
                 </div>
            </div>
        </div>  
     );
}
 
export default AboutUs;