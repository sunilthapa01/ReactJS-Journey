import React from 'react'

function Meal({ MealForData }) {
    const ingredients = [
        { ing: MealForData.strIngredient1, mea: MealForData.strMeasure1 },
        { ing: MealForData.strIngredient2, mea: MealForData.strMeasure2 },
        { ing: MealForData.strIngredient3, mea: MealForData.strMeasure3 },
        { ing: MealForData.strIngredient4, mea: MealForData.strMeasure4 },
        { ing: MealForData.strIngredient5, mea: MealForData.strMeasure5 },
        { ing: MealForData.strIngredient6, mea: MealForData.strMeasure6 },
        { ing: MealForData.strIngredient7, mea: MealForData.strMeasure7 },
        { ing: MealForData.strIngredient8, mea: MealForData.strMeasure8 },
        { ing: MealForData.strIngredient9, mea: MealForData.strMeasure9 },
        { ing: MealForData.strIngredient10, mea: MealForData.strMeasure10 },
        { ing: MealForData.strIngredient11, mea: MealForData.strMeasure11 },
        { ing: MealForData.strIngredient12, mea: MealForData.strMeasure12 },
        { ing: MealForData.strIngredient13, mea: MealForData.strMeasure13 },
        { ing: MealForData.strIngredient14, mea: MealForData.strMeasure14 },
        { ing: MealForData.strIngredient15, mea: MealForData.strMeasure15 },
      ];
    if (!MealForData || MealForData.length === 0) {
        return (<div className='m-auto mt-12 p-20'>
            <h1 className='text-white font-bold text-4xl'> Loading Screen.....</h1>
        </div>)
      }
    return (
        <div className='mx-5 mt-4 border-2 h-full rounded-2xl p-2 bg-[#1E1E1E]'>
            <div className='w-full rounded-[8px_8px_0px_0px] flex flex-col justify-end p-6 bg-cover bg-center h-75' style={{ backgroundImage: `url(${MealForData.strMealThumb})` }}>
                <h1 className='text-white text-[50px] font-bold'>{MealForData.strMeal}</h1>
                <button className='py-2 px-8 bg-[#1E1E1E] text-white rounded-lg w-fit'>{MealForData.strCategory}</button>
            </div>

            <div className='p-6 w-full '>
                <h1 className='text-white font-bold text-2xl'>Ingredients</h1>
                <div className="w-full p-4 px-0 grid gap-5 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                    {ingredients.map((item, index) => {
                        if (item.ing === "" || item.ing === null) {
                            return null;
                        }

    return (
      <div
        key={index}
        className="flex justify-between w-full bg-[#111111] p-4 rounded-2xl border-2 border-gray-500"
      >
        <h3 className="text-white font-bold text-lg">{item.ing}</h3>
        <p className="text-blue-800 font-bold text-lg">{item.mea}</p>
      </div>
    );
  })}
</div>

                <h2 className='text-white font-bold text-2xl p-3 px-0'>Instructions</h2>
                <div className='p-4 px-2 bg-[#1E1E1E] border-2 border-[#fff] rounded-2xl'>
                    <p className='font-bold text-white text-1xl'>{MealForData.strInstructions}</p>
                </div>
                <div className='w-full p-4  mt-2 grid grid-cols-2 gap-2'>
                    <button className='bg-[#DC2626] p-2 border-2 border-black shadow-[0_0_5px_#000] cursor-pointer rounded-lg text-white font-bold transition-all ease-in active:scale-95'><a href={MealForData.strYoutube}>
                    Watch Video Tutorial</a></button>
                    <button className='bg-[#4318D1] p-2 border-2 border-black shadow-[0_0_5px_#000] cursor-pointer rounded-lg text-white font-bold transition-all ease-in active:scale-95'><a href={MealForData.strSource}>
                    View Source     
                    </a></button>

                </div>
            </div>
        </div>
    )
}

export default Meal
