import Pic from '../../Asset/photo/home.jpg';
import './Home.css';
const Home = () => {
    return ( 
        <div>
          <div className="home">
             <div className='left'>
       <h1>Best Interior Design For Your Home.</h1>
            <p>interior design is the art and science of enterchanching the interior<br/>
            of a building to achive a healthier and more aesthetically.</p>
            <button className="button">Explore Rooms</button>
           <div className='border'>
           <div className='buttom'>
            <div>10<hr/>Years<br/>Experience</div>
            <div>25 <hr/>Award<br/>Gained</div>
            <div>120<hr/>Furniture<br/>Sold</div>
          </div>
           </div>
               </div>
             <div className='right'>
                 <img src={Pic}></img>
             </div>
          </div>
        </div>
     );
}
 
export default Home;