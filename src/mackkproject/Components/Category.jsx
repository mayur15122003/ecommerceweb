import "./Category.css"
import { Link } from "react-router-dom"
function Category() {
    return(
        <>
        <div className="dog2">
                <p>PRODUCT'S LANDING PAGE</p>
            </div>
        <div className="cat">
            <div className="dog1">
                <Link to= "/Mproducts">
                <button>MEN</button>
                </Link>
                 <Link to= '/Products'>
                <button>WOMEN</button>
                </Link>
        
            </div>
            
        </div>
        </>
    )
} 
export default Category