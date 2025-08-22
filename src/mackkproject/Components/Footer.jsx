import './Footer.css'
import Frame18 from '../asset.src/Frame18.svg'
function footer(){
    return(
        <>
        <div className="foot">
            <div className="subfoot">
                 <h1>JOIN SHOOPING COMMUNITY TO GET MONTHLY PROMO</h1>
        <h2>Type your email down below and be young wild generation</h2>
    
       <input type="text" placeholder='Add your email' />
        <button>SEND</button>

            </div>
           
        </div>
        <footer>
            <div className="Ff1">
               <h1>FASHION</h1>
               <p>Complete your style with awesome cloths from us.</p>
        <img src={Frame18} alt=""/>            </div>
            <div className="Ff2">
                <div className="about">
                    <h2>Company</h2>
                    <h2>About</h2>
                    <h2>Contact Us</h2>
                    <h2>Support</h2>



                </div>
                <div className="about">
                    <h2>Quick Link</h2>
                    <h2>Share Location</h2>
                    <h2>Orders Tracking</h2>
                    <h2>Size Guide</h2>
                    <h2>FAQs</h2>

                    
                </div>
                <div className="about">
                    <h2>Legel</h2>
                    <h2>Terms & conditions</h2>
                    <h2>privacy Policy</h2>
                    
                </div>
            </div>
        </footer>
        


        </>
    )
} 
export default footer