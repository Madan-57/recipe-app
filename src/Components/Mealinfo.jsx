// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'

// const Mealinfo = () =>{
//     const {mealid} = useParams();
//     const [info, setInfo] =useState()
//     console.log(mealid);

//     const getinfo = async () =>{
//         const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
//         const jsonData = await get.json();
//         console.log(jsonData.meals[0]);
//         setInfo(jsonData.meals[0])

//     }
//     if(info != ""){
//         getinfo()

//     }

//     return(
//         <div>
//             {
//             !info ? " Data Not found" :
//             <div className='mealInfo'>
//          <img src={info.strMealThumb
// }/>
//          <div className='info'>
//             <h1>Recipe Details</h1>
//             <button>{info.strMeal}</button>
//             <h3>Instructions</h3>
//             <p className='para'>{info.strInstructions}</p>
//          </div>
//         </div>
//         }
//         </div>
        
//     )
// }
// export default Mealinfo






// --------------------------------------------








import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
    const { mealid } = useParams();
    const [info, setInfo] = useState();

    useEffect(() => {
        const getinfo = async () => {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
            const jsonData = await get.json();
            setInfo(jsonData.meals[0]);
        };
        getinfo();
    }, [mealid]);

    return (
        <div>
            {!info ? (
                "Data Not Found"
            ) : (
                <div className='mealInfo'>
                    <img src={info.strMealThumb} alt={info.strMeal} />
                    <div className='info'>
                        <h1>Recipe Details</h1>
                        <button>{info.strMeal}</button>
                        <h3>Ingredients</h3>
                        <ul>
                            {Object.keys(info)
                                .filter((key) => key.includes('strIngredient') && info[key])
                                .map((key, index) => (
                                    <li key={index}>{info[key]}</li>
                                ))}
                        </ul>
                        <h3>Instructions</h3>
                        <p className='para'>{info.strInstructions}</p>
                        {/* <button>Add to Favorites</button> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mealinfo;





// ---------------------------------last one



