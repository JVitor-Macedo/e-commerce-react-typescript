import "./Colors.css"

function Colors(){
    return <div>
        <h2>Cores</h2>
           <label className="sidebar-label-container color-title">
                <input type="radio" name="test" />
                <span className="checkmark"></span>Todos
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>Preto
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>Azul
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>Vermelho
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>Verde
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>Branco
            </label>

    </div>
}

export default Colors