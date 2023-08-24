import { AiFillStar } from "react-icons/ai"
import { BsFillBagHeartFill } from "react-icons/bs"
import "./Products.css"

function Products(){
    return <>
    <section className="card-container">
        <section className="card">
            <img className="card-img" src="https://down-br.img.susercontent.com/file/sg-11134201-7qvcv-lf0yt1m9p6zy32_tn" alt="img-camisa" />
            <div className="card-details">
                <h3 className="card-title">Camisa</h3>
                <section className="card-reviews">
                    <AiFillStar className="rating-star"/> 
                    <AiFillStar className="rating-star"/> 
                    <AiFillStar className="rating-star"/> 
                    <AiFillStar className="rating-star"/>
                    <span className="total-reviews">4</span>
                </section>
                <section className="card=price">
                    <div className="price">
                        <del>R$ 300</del> 200
                    </div>
                    <div className="bag">
                        <BsFillBagHeartFill className="bag-icon"/>
                    </div>
                </section>
            </div>
        </section>
    </section>
    </>
}

export default Products