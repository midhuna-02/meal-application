import React,{useContext,useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useGlobalContext } from '../context'
function Search() {
const [text, setText] = useState('')
const{setSearchText,fetchRadomMeal}=useGlobalContext()
const handleChange=(e)=>{
setText(e.target.value)
}
const handleSubmit=(e)=>{
  e.preventDefault()
  if(text)
  {
    setSearchText(text)
  }
}
const handleRadomMeal=()=>{
 
    setSearchText('');
  setText('');
  fetchRadomMeal();

    
  
}
  return (
    <header className='container-header'>
<form onSubmit={handleSubmit}>
<input type="text"  placeholder='search favourite meal' value={text} onChange={handleChange}/>
<button type='submit' className='btn btn-info' >Search</button>
<button className='btn btn-primary' onClick={handleRadomMeal}>surprice me!</button>
</form>
    </header>
  )
}

export default Search