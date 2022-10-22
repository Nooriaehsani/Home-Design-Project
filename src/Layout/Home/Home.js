import Pic from '../../Asset/photo/home.jpg';
import './Home.css';
const Home = () => {
    return ( 
        <div>
          <div className='top-top'>
            <div className="home">
              <div className='top-section'> 
                 <div className='left'>
                    <h1>Best Interior Design For Your Home.</h1>
                    <p>interior design is the art and science of enterchanching the interior<br/>
                      of a building to achive a healthier and more aesthetically.
                    </p>
                    <button className="button">Explore Rooms</button>
                    <div className='buttom'>
                        <div>
                           <div className='number'>10</div>
                           <div>Years<br/>Experience</div>
                        </div>
                        <div>
                           <div className='number'>25</div>
                           <div>Award<br/>Gained</div>
                        </div>
                        <div>
                           <div className='number'>120</div>
                           <div>Furniture<br/>Sold</div>
                        </div>
                    </div>
                 </div>
                <div className='right'>
                  <img src={Pic}></img>
                </div>
              </div>
            </div>
            <div className='side-text'>
               <div><h3>Lexease.agency@gmail.com</h3></div>
               <div><h3>(+001)313 245 578 214</h3></div>
            </div>
          </div>
          
          <div className='down-section'>
            <div className='Down'>
            <h1>We Serve the <br/>best for you.</h1>
            </div>
            <div className='r-section' >
            <h4>Find beautiful home interior designs. complate home<br/>interiors solution. An interior design is someon who<br/>plans, researches, coordinates.</h4>
            <a href='www.google.com' className='link'>Read more</a>
            </div>
          </div>   
        </div>
     );
}
 
export default Home;