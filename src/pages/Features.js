import './Features.css';
import foto from '../Asset/photo/comfort.jpg';
import photo from '../Asset/photo/photo.jpg';
const Features = () => {
    return ( 
        <div>
             <div className='f-all'> 
           
                <div className='fe-all'>
                   <h1>Architects<br/>With Different <br/>Approach</h1>
                   <p>Complate home interiors solution.An <br/>interior designer is someon who planes<br/>
                    researches,coordinates.</p>
                   <button>Learn More</button>
              </div>
              <div className='img'>
                <img src={foto}></img>
                 </div>
             </div>
             <div className='photo'> <img src={photo}></img></div>
        </div>
     );
}
 
export default Features;