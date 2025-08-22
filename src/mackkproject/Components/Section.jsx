import shopp1 from '../asset.src/shopp1.png'
import brand1 from '../asset.src/lo1.png'
import brand2 from '../asset.src/lo2.png'
import brand3 from '../asset.src/lo3.png'
import brand4 from '../asset.src/lo4.png'
import brand5 from '../asset.src/lo5.png'
import shoes1 from '../asset.src/frame1.png'
import shoes2 from '../asset.src/frame2.png'
import shoes3 from '../asset.src/frame3.png'
import image12 from '../asset.src/image12.png'
import girl1  from '../asset.src/girl1.svg'
import girl2 from '../asset.src/girl2.svg'
import './Section.css' 





//import manlegphoto from '../asset.src/manlegphoto.svg'//
function Section(){
    return(
        <>
        <div class="page1" >
            <div className="part1">
              <h1>LET'S EXPLORE UNIQUE CLOTHES.</h1> 
              <p>Live for influential and innovative fashion! </p>
                 <button>Shop Now</button>
            </div>
            <div className="part2">
            <img src={shopp1} alt=""/>
            </div>
        </div>
        <div className="brandrow">
            <img id="log"src={brand1} alt=""/>
            <img id="log"src={brand2} alt=""/>
            <img id="log" src={brand3} alt=""/>
            <img id="log"src={brand4} alt=""/>
            
            {/* <div className="brand2">
                <img id="log"src={brand5} alt=""/>
              <img id="log"src={brand1} alt=""/>
            <img id="log"src={brand2} alt=""/>
            <img id="log" src={brand3} alt=""/>
            <img id="log"src={brand4} alt=""/>
            <img id="log"src={brand5} alt=""/>
            </div> */}
            
        </div> 
        <div className="page2">
           
            <h2 id="head">NEW ARRIVALS</h2>
          <div className="flex">
           <div className='shoot'>
            <img id="boom"src={shoes3} alt=""/>
            <p>Hoodies & Sweetshirt</p>
            <h4 id="explore">Explore Now !</h4>
            
            </div>
            <div className="shoot" >
            <img id="boom"src={shoes2} alt=""/>
            <p>Coats & Parkas</p>
            <h4 id="explore">Explore Now !</h4>
             </div>
            
             
            <div className="shoot">
                <img id="boom"src={shoes3} alt=""/>
                <p>Tees &-Shirts</p>
            <h4 id="explore">Explore Now !</h4>
                

           
            
            </div> 
            </div>
        </div> 

        <div className="section1">
             <div className="portion2"> 
                <h1 id="pay">PAYDAY</h1> 
                <h1>SALE NOW</h1>
                <p>Spend minimal $100 get 30% off
                    voucher code for your next purchase </p>
                    <h2>1 June-10 June 2021</h2>
                    <p>*Terms & Condition apply</p>
                    <button>SHOP NOW</button>
                
            
  </div>
        <img id="women"  src={image12} alt=""/>
   
        </div>

        <div className="fav">
            <h2>Genzy collection</h2>
            <div className="subfav">
                <div className="imgE">
                    <img src={girl1} alt="" />
                    <h3>Treanding on instagram</h3>
                    <p>Explore Now!</p>
                </div>
                 <div className="imgE">
                    <img src={girl2} alt="" />
                     <h3>Treanding on instagram</h3>
                    <p>Explore Now!</p>
                </div>
            </div>
        </div>
            
            {/* <div className="portion1">
                <h1>Young's Favourite</h1>
                <img src={girl1} alt=""/>
                <p>Trendimg on instagram
                    <h3>Explore Now!</h3>
                </p>
                <img src={girl2} alt=""/>
                <p>All Under $40
                    <h3>Explore Now!</h3>
                </p>

            
            
            </div> */}
        {/* <div className="advertise">
            <div className="nav1">
                <h3>--Best Selling--</h3>
                <li>Man</li>
                <li>Women</li>
                <li>Boy</li>
                <li>Child</li>
        
            </div>  */}

            {/* <div className="nav2">
                 <img id="snek" src={navv1} alt=""/>
                
                 <p>$2999.00</p>
                 <img id="snek" src={navv2} alt=""/>
                
                 <p>$2999.00</p>
                 <img id="snek" src={navv3} alt=""/>
        
                 <p>$2999.00</p>
                 <img id="snek" src={navv4} alt=""/> 
                
                 <p>$2999.00</p>
                 
                 
            </div> */}
      
    
        </>
    )
}
export default Section