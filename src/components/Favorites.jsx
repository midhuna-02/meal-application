import React from 'react'
import { useGlobalContext } from '../context'

function Favorites() {
  const{favorite,removeFavorite,selectedMeal}=useGlobalContext()
  return (
<section className='section-container'>
  <h5  className='section-fav'>Favorite Meals</h5>

    <div className='fav-container'>
     
      { 
      
      favorite.map((item)=>{
        const{idMeal,strMealThumb:image}=item;
        return<div className="fav-meals" key={idMeal}>
            
        <img src={image} alt="" className='favorite-img'  onClick={()=>{selectedMeal(idMeal,true)}}/>
        <button className='remove-btn' onClick={()=>{removeFavorite(idMeal)}}>Remove</button>
      </div>
        
      })
      
      }
     

    </div>
    </section>
  );
  
}

export default Favorites