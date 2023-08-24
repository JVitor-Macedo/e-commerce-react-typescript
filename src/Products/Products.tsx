import { AiFillStar } from "react-icons/ai"
import { BsFillBagHeartFill } from "react-icons/bs"
import "./Products.css"

function Products(){
    return <>
    <section className="card-container">
        <section className="card">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fshopee.com.br%2Fsearch%3Fkeyword%3Dcamisa%2520do%2520brasil&psig=AOvVaw1Yz_ksm8fKToXMnyVZv83_&ust=1692983991401000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIiumtPm9YADFQAAAAAdAAAAABAE" alt="img-camisa" />
            <div className="card-details">
                <h3 className="card-title">Camisa</h3>
                <section className="card-reviews">
                    <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>
                    <span className="total-reviews">4</span>
                </section>
                <section className="card=price">
                    <div className="price">
                        <del>R$ 300</del> 200
                    </div>
                    <div className="bag">
                        <BsFillBagHeartFill/>
                    </div>
                </section>
            </div>
        </section>
    </section>
    </>
}

export default Products