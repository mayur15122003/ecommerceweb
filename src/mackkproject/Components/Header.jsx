import { Link } from "react-router-dom"
import './Header.css'
import { CiHeart } from "react-icons/ci";
function Header(){
    return(
        <>
         <header>
         <h1 id="ff">Fashion's</h1> 
    
        <nav className='style' id="ST">
        
        <Link to={"/"} className='nav'>HOME</Link>
        <Link to={"/Products" } className='nav'>PRODUCTS</Link>
        <Link to={"/CATEGORY" } className='nav'>CATEGORY</Link>
        <Link to={"CART" }className='nav'>CART</Link>
        <h3 id="heart"> <CiHeart /></h3>
    

        <button className="btn">SIGN UP</button>
    </nav>
    </header>
    </>
    )
} 
export default Header