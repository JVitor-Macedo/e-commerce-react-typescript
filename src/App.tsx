import { useState } from "react"
import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/sidebar"
import "./index.css"
import Category from "./Sidebar/Category/Category"
import Data from "./db/dataBase"
import Card from "./Components/card"



function App() {

   const [selectedCategory, setSelectedCategory] = useState(null)

   //input Filter
   const [query, setQuery] = useState("")

   const handleInputChange = (event:any) => {
      setQuery(event.target.value)
   }

   const filterItens = Data.filter(product => product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))

   const handleChange = (event:any) => {
      setSelectedCategory(event.target.value)
   }

   
   const handleClick = (event:any) => {
      setSelectedCategory(event.target.value)
   }

   const filterData = (products:any, selected:any, query:any) => {
      let filteredProducts = Data

      if(query){
         filteredProducts = filterItens
      }

      if(selected){
         filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => category === selected ||
          color === selected ||
           company === selected ||
            newPrice === selected ||
             title === selected)
         }

         return filteredProducts.map(({img, title, prevPrice}) => (
            <Card
            key={Math.random()}
            img={img}
            title={title}
            prevPrice={prevPrice}
            />
         ))
   }



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
