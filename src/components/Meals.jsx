import React from 'react'
import { useGlobalContext } from '../context'
import { FaRegThumbsUp } from "react-icons/fa";
// import { useContext } from 'react'
// import { AppContext } from '../context'
function Meals() {
  const {loading,meal,selectedMeal,addToFavorite}=useGlobalContext()
  console.log(meal)
  if(loading){
    return <section className='section'>
      <h3>Loading...</h3>
    </section>
  }
  if(meal.length<1)
  {
    
    return <section className='section'>
    <h3>No meals matched on your search Item.Please try again</h3>
  </section>
    
  }
  else{
    console.log("meals found")
  }
  
  return (
  
    <section className='section-center'>
     {
    meal.map((singlemeal)=>{
      const{idMeal,strMeal:title,strMealThumb:image}=singlemeal
      return(
        <article key={idMeal} className='single-meal'>
      <img src={image} alt="" onClick={()=>selectedMeal(idMeal)}/>
      <footer>
        <h5>{title}</h5>
        <button className='like-btn' onClick={()=>{addToFavorite(idMeal)}}><FaRegThumbsUp/></button>
      </footer>
        </article>
      );
    
      
    })
   }
    </section>
  
  );
  
}

export default Meals