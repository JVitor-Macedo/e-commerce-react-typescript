import { AiOutlineShoppingCart } from "react-icons/ai"
import Category from "./Category/Category"
import "./Sidebar.css"
import Colors from "./Colors/Colors"
import Price from "./Price/Price"

function Sidebar(){
    return <>
    <section className="sidebar">
        <div className="logo-container">
            <h1><AiOutlineShoppingCart/></h1>
        </div>
        
        <Category/>
        <Price/>
        <Colors/>
    </section>
    </>
}

export default Sidebar