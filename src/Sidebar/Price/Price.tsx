import "./Price.css"


function Price(){
    return <div className="ml">
        <h2 className="sidebar-title price-title">Preço</h2>

        <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>Todos
        </label>
        <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>R$ 0 - R$ 50
        </label>
        <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>R$ 50 - R$ 150
        </label>
        <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>R$ 150 - R$ 250
        </label>
        <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>R$ 250 - R$ 350
        </label>
    </div>
}

export default Price