import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/sidebar"
import "./index.css"

function App() {
 return (
    <>
    <Sidebar/>
     <Navigation/>
     <Recommended/>
     <Products/>
    </>
 )
}

export default App
