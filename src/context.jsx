import React,{useContext,useEffect,useState} from "react";
import axios from "axios";
const AppContext=React.createContext()
const allMealsUrl='https://www.themealdb.com/api/json/v1/1/search.php?s=';
const randomMealsUrl="https://www.themealdb.com/api/json/v1/1/random.php"
const getFavoritesFromLocalStorage=()=>{
   let favorites=localStorage.getItem('favorite')
   if(favorites){
favorites=JSON.parse(localStorage.getItem('favorite'));
   }
   else{
favorites=[];
   }
   return favorites
}
const AppProvider=({children})=>{
   const [loading,setLoading]=useState(false)
   const [meal, setMeal] = useState([])
   const [showModal, setShowModal] = useState(false)
const[searchText,setSearchText]=useState('')
const [selectMeal,setSelectMeal] = useState(null)
const [favorite, setFavorite] = useState(getFavoritesFromLocalStorage())
   
     const fetchMeals=async(url)=>{
      setLoading(true)
      try {
         const {data}=await axios(url);
         if(data.meals)
         {
            setMeal(data.meals)
         }
         else{
            setMeal([])
         }
        
      }
       catch (error) {
         console.log(error)
      }
      setLoading(false)
     }
     const fetchRadomMeal=()=>{
      fetchMeals(randomMealsUrl)
     }
    useEffect(() => {
      
    fetchMeals(allMealsUrl);
     
    }, [])
    
     const selectedMeal=(idMeal,favoriteMeal)=>{
      console.log("hi"+ idMeal);
      let mealSelect;
      if(favoriteMeal)
      {
         mealSelect=favorite.find((item)=>item.idMeal===idMeal)
      }
      else{
         mealSelect=meal.find((item)=>item.idMeal===idMeal)
      }
     
      setSelectMeal(mealSelect);
      setShowModal(true)
     }
     const closedMeal=()=>{
      setShowModal(false)
     }
const addToFavorite=(idMeal)=>{


const alreadyFavorite=favorite.find((meals)=>meals.idMeal===idMeal)
if(alreadyFavorite) return
const addMeal=meal.find((meals)=>meals.idMeal===idMeal)
const updateFavorite=[...favorite,addMeal]
setFavorite(updateFavorite);
localStorage.setItem('favorite',JSON.stringify(updateFavorite));

}
const removeFavorite=(idMeal)=>{
   // console.log("remove" + idMeal)
const updateFavorite=favorite.filter((item)=>item.idMeal !== idMeal)
// const updateFavorite=[...favorite,removeMeal]
setFavorite(updateFavorite);
localStorage.setItem('favorite',JSON.stringify(updateFavorite));
}
    
     useEffect(() => {
      if(!searchText) return
      
         fetchMeals(`${allMealsUrl}${searchText}`);
      
      }, [searchText])
   
   return(
    <AppContext.Provider value={{loading,meal,setSearchText,fetchRadomMeal,showModal,selectedMeal,selectMeal,closedMeal,addToFavorite,removeFavorite,favorite}}>
         {children} 
    </AppContext.Provider>
   )
  
}
export const useGlobalContext=()=>{
    return useContext(AppContext)
   }
export {AppProvider,AppContext}