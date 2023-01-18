import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GIFExpertApp = () => {

    const [categories, setcategories] = useState(['one pice'])

    const onAddcategory = (NewCategory) =>{

        if( categories.includes(NewCategory)) return;
        
        setcategories([NewCategory,...categories])

    }
  return (
    <>
        
        <h1>GifExpertApp</h1>

        <AddCategory 
        onNewCategory={ onAddcategory }
        />

        {
                categories.map( (category) => (
                       <GifGrid key={category}
                       category={category}/>
                ))
        }
            
    </>
  )
}
