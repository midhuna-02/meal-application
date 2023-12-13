import React from 'react'
import { useGlobalContext } from './context';
import Meals from './components/Meals'
import './App.css';
import Search from './components/Search';
import Modal from './components/Modal';
import Favorites from './components/Favorites';
function App() {
  const {showModal,favorite}=useGlobalContext()
  return (
   <main>
    <Search/>
    {favorite.length>0 && <Favorites/>}
    
    <Meals/>
   {showModal && <Modal/>} 
   </main>
  )
}

export default App