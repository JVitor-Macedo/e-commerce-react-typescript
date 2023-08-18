import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai"
import"./Nav.css"

function Nav(){
    return <nav>
        <div className="nav-conteiner">
            <input 
            className="search-input"
            type="text" 
            placeholder="Pesquise aqui..." />
        </div>

        <div className="profile-conteiner">
            <a href="#">
                <FiHeart className="nav-icons"/>            
            </a>

            <a href="#">
                <AiOutlineShoppingCart className="nav-icons"/>            
            </a>

            <a href="#">
                <AiOutlineUserAdd className="nav-icons"/>            
            </a>
        </div>

    </nav>
}

export default Nav