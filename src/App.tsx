import { SetStateAction, useState } from "react"
import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/sidebar"
import "./index.css"
import products from "./db/dataBase"
import Card from "./Components/card"


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function App() {

   const [selectedCategory, setSelectedCategory] = useState(null)

   //input Filter
   const [query, setQuery] = useState("")

   const handleInputChange = (event: { target: { value: SetStateAction<string> } }) => {
      setQuery(event.target.value)
   }

   const filterItens = products.filter(product => product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))

   const handleChange = (event: { target: { value: SetStateAction<null> } }) => {
      setSelectedCategory(event.target.value)
   }

   
   const handleClick = (event: { target: { value: SetStateAction<null> } }) => {
      setSelectedCategory(event.target.value)
   }

   const filteredData = (products, selected, query) => {
      let filteredProducts = products

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

         return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
            <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
            />
         ))
   }

   const result = filteredData(products, selectedCategory, query)



 return (
    <>
     <Sidebar handleChange={handleChange}/>
     <Navigation query={query} handleInputChange={handleInputChange}/>
     <Recommended handleClick={handleClick}/>
     <Products result={result}/>
    </>
 )
}

export default App
