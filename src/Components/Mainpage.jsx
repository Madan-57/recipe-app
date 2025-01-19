// import React, { useState } from 'react'
// import Mealcards from './Mealcards';

// const Mainpage = ()=>{
//     const [data,setData] =useState();
//     const [search, setSearch] =useState()
//     const [msg, setMsg] = useState(" ")

//     const handleInput= (event) =>{
//         setSearch(event.target.value)


//     }

//     const myfun = async () =>{
//         if (search == ""){
//             setMsg("Please Enter a Recipe")
//         }else{
//             const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
//         const jsonData = await get.json()
//         // console.log(jsonData.meals);
//         setData(jsonData.meals)

//         }
        

//     }
//     // console.log(data);


//     return(
//         <>
//         <div className='bg'>
//         <h1 className='head'>👨🏻‍🍳 FOOD RECIPE APP 👨🏻‍🍳</h1>
//         <div className='container'>
//             <div className='searchBar'>
//                 <input type='text' placeholder='Enter Dish Name ' onChange={handleInput}/>
//                 <button onClick={myfun}>Search</button> 
//             </div>
//             <h4>{msg}</h4>
//             <div>
//                 <Mealcards detail={data}/>

//             </div>
//         </div>
//         </div>

        
//         </>
        
//     )
// }


//  export default Mainpage







// -----------------------------------------------








import React, { useState, useEffect } from 'react';
import Mealcards from './Mealcards';

const Mainpage = () => {
    const [data, setData] = useState();
    const [search, setSearch] = useState();
    const [msg, setMsg] = useState(" ");
    const [favorites, setFavorites] = useState([]);
    const [viewingFavorites, setViewingFavorites] = useState(false);

    const handleInput = (event) => {
        setSearch(event.target.value);
    };

    const myfun = async () => {
        if (search === "") {
            setMsg("Please Enter a Recipe");
        } else {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
            setData(jsonData.meals);
            setViewingFavorites(false);
        }
    };

    const toggleFavorite = (meal) => {
        if (favorites.some((fav) => fav.idMeal === meal.idMeal)) {
            const updatedFavorites = favorites.filter((fav) => fav.idMeal !== meal.idMeal);
            setFavorites(updatedFavorites);
            if (viewingFavorites) {
                setData(updatedFavorites);
            }
        } else {
            setFavorites([...favorites, meal]);
        }
    };

    const viewFavorites = () => {
        setData(favorites);
        setViewingFavorites(true);
    };

    useEffect(() => {
        const fetchDefaultRecipes = async () => {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`);
            const jsonData = await get.json();
            setData(jsonData.meals);
        };
        fetchDefaultRecipes();
    }, []);

    return (
        <>
            <div className='bg'>
                <h1 className='head'>👨🏻‍🍳 FOOD RECIPE APP 👨🏻‍🍳</h1>
                <div className='container'>
                    <div className='searchBar'>
                        <input type='text' placeholder='Enter Dish 🥘 Name ' onChange={handleInput} />
                        <button onClick={myfun}>Search</button>
                        <button onClick={viewFavorites}> Favorites</button>
                    </div>
                    <h4>{msg}</h4>
                    <div>
                        <Mealcards detail={data} toggleFavorite={toggleFavorite} favorites={favorites} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mainpage;










