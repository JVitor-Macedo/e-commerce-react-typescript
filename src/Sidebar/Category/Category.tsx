import "./Category.css"

function Category(){
    return <div>
        <h2 className="sidebar-title">Category</h2>

        <div>
            <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>Todos
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>Camisas
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>Shorts
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>Moletom
            </label>
            <label className="sidebar-label-container">
                <input type="radio" name="test" />
                <span className="checkmark"></span>Calças
            </label>
        </div>
    </div>
}

export default Category