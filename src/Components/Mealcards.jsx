// import React from 'react'
// import { NavLink } from 'react-router-dom';

// const Mealcards = ({detail})=>{
//     console.log(detail);
//     return(
//     <div className='meals'>
//         {!detail ? "" : detail.map((curItem)=>{
//             return(
//                 <div className='mealImg'>
//                     <img src={curItem.strMealThumb}/>
//                     <p>{curItem.strMeal}</p>
//                     <NavLink to={`/${curItem.idMeal}`}><button >Recipe</button></NavLink>
                    
//                 </div>
//             )
//         })
        
//         }
//     </div>
//     )
// }

// export default Mealcards








// --------------------------------------------------------------
















import React from 'react';
import { NavLink } from 'react-router-dom';

const Mealcards = ({ detail, toggleFavorite, favorites }) => {
    return (
        <div className='meals'>
            {!detail
                ? ""
                : detail.map((curItem) => {
                      const isFavorite = favorites.some((fav) => fav.idMeal === curItem.idMeal);
                      return (
                          <div className='mealImg' key={curItem.idMeal}>
                              <img src={curItem.strMealThumb} alt={curItem.strMeal} />
                              <p>{curItem.strMeal}</p>
                              <NavLink to={`/${curItem.idMeal}`}><button>Recipe</button></NavLink>
                              <button onClick={() => toggleFavorite(curItem)}>{isFavorite ? "Remove " : "Add Favorite"}</button>
                          </div>
                      );
                  })}
        </div>
    );
};

export default Mealcards;




// --------------------------- lost one




