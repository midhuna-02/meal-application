import React from 'react'
import { useGlobalContext } from '../context'
function Modal() {
  const{showModal,selectMeal,closedMeal}=useGlobalContext()
  const{strMeal:title,strMealThumb:image,strInstructions:text,strSource:source}=selectMeal
  return (
 <aside className='modal-overlay'>
<div className="modal-container">
  <img src={image} alt=""  className='modal-img'/>
  <div className="modal-content">
    <h3>{title}</h3>
    <u><em><p >Ingredients</p></em></u>
  

  <p>{text}</p>
  <a href={source}><p>Source</p></a>
  <button className="closed-btn" onClick={closedMeal}>close</button></div>
  
  
</div>
 </aside>
  )
}

export default Modal