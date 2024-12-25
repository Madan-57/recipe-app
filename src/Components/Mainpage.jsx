import React, { useState } from 'react'
import Mealcards from './Mealcards';

const Mainpage = ()=>{
    const [data,setData] =useState();
    const [search, setSearch] =useState()
    const [msg, setMsg] = useState(" ")

    const handleInput= (event) =>{
        setSearch(event.target.value)


    }

    const myfun = async () =>{
        if (search == ""){
            setMsg("Please Enter a Recipe")
        }else{
            const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json()
        // console.log(jsonData.meals);
        setData(jsonData.meals)

        }
        

    }
    // console.log(data);


    return(
        <>
        <div className='bg'>
        <h1 className='head'>👨🏻‍🍳 FOOD RECIPE APP 👨🏻‍🍳</h1>
        <div className='container'>
            <div className='searchBar'>
                <input type='text' placeholder='Enter Dish Name ' onChange={handleInput}/>
                <button onClick={myfun}>Search</button> 
            </div>
            <h4>{msg}</h4>
            <div>
                <Mealcards detail={data}/>

            </div>
        </div>
        </div>

        
        </>
        
    )
}


 export default Mainpage



