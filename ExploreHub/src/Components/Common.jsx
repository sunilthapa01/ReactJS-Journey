import React from 'react';
import Header from '../Feature/Header';
import Tabs from '../Feature/tabs';
import Dogs from '../Feature/Dog';
import Meal from '../Feature/Meal';
import Cats from '../Feature/Cats';
import Youtube from '../Feature/Youtube'
import { useState } from 'react';

function Common() {
    const [dogdata, setDogdata] = useState([])
    const [MealData, setMealdata] = useState([]);
    const [CatsData, setCatsData] = useState([]);
    const [TabsVis, setTabVis] = useState(null);

    const Dog = async () => {
        const response = await fetch('https://api.freeapi.app/api/v1/public/dogs?page=1&limit=10&query=Affenpinscher');
        const result = await response.json();
        setDogdata(result.data.data)
        console.log(result.data.data)
        setTabVis('dogs')
    }
    const MealFunc = async () => {
        const Check = Math.floor(Math.random()*100); 
        const Response = await fetch(`https://api.freeapi.app/api/v1/public/meals/${Check}`)
        const show = await Response.json();
        setMealdata(show.data)
        console.log(show);
        setTabVis('Meal')
    }   

    const CatsFunc = async () => {
        const response = await fetch('https://api.freeapi.app/api/v1/public/cats');   
        const result = await response.json();
        // if (result.data.page === null || result.data.limit === null) {
        //     console.log('All the Limit Are Expired and You have to wait sometime')
        // }
        setCatsData(result.data.data)
        console.log(result.data.data)
        setTabVis('cat')
    }

  return (
      <div>
          <Header />
          <Tabs ClickDog={Dog} ClickForMeal={MealFunc} ClickForCat={CatsFunc} />
          <Dogs dogs={dogdata} />
          <Meal MealForData={MealData} />
          <Cats Cats={CatsData} />

          {TabsVis === 'dogs' && <Dogs dogs={dogdata} />}
          {TabsVis === 'Meal' && <Meal MealForData={MealData} />}
           {TabsVis === 'cat' && <Cats Cats={CatsData} />
        }
        
          <Youtube/>
      
    </div>
  )
}

export default Common
