import React from 'react'
import PlanningCard from './PlanningCard'
import { useState } from 'react';

function Planning() {
    const categoryCards = [
        {
          id: 1,
          icon: "😁",
          title: "Fun & Comedy",
          description: "Laughs and good vibes"
        },
        {
          id: 2,
          icon: "💕",
          title: "Romantic",
          description: "Love stories and feels"
        },
        {
          id: 3,
          icon: "🔥",
          title: "Thriller",
          description: "Edge-of-your-seat action"
        },
        {
          id: 4,
          icon: "😌",
          title: "Chill",
          description: "Relaxed and easy watching"
        }
    ];
    const timeCards = [
        {
          id: 1,
          icon: "⚡",
          title: "30 Minutes",
          description: "Quick episode or short film"
        },
        {
          id: 2,
          icon: "🎬",
          title: "1–2 Hours",
          description: "Perfect movie length"
        },
        {
          id: 3,
          icon: "🍿",
          title: "3+ Hours",
          description: "Epic marathon session"
        }
      ];
      const [selectedMood, setSelectedMood] = useState(null);
      const [selectedTime, setSelectedTime] = useState(null);
          
    
    function ForCardSelect() {
        if (!selectedMood || !selectedTime) {
            alert("Please select a card first!");
            return;
          }
      
          alert(
            `You selected:\nTitle: ${selectedMood.title}\nDescription: ${selectedMood.description}`
          );
      
    }
      
  return (
    <div className='pt-20 flex items-center justify-center flex-col'>
          <h1 className='text-white font-bold text-5xl mb-8'>Plan Your Movie Night</h1>
          <h3 className='text-[#999999] text-xl mb-8'>Tell us what you're in the mood for</h3>
          <div className='text-white font-bold text-4xl mb-8 text-center'>
              <h1>What's your Mode?</h1>
              <div className='flex flex-wrap gap-5 w-[70%] m-auto'>
              
                  {
                      categoryCards.map((planCard) => {
                        return <PlanningCard key={planCard.id} ic={planCard.icon} title={planCard.title} description={planCard.description} onSelect={setSelectedMood}></PlanningCard>
                      })
                      
                }                  
              </div>
          </div>
          <div className='text-white font-bold text-4xl mb-8 text-center'>
              <h1>How Much Time Do You Have?</h1>
              <div className='flex flex-wrap gap-5 w-[70%] m-auto'>
                  {
                      timeCards.map((timeCard) => {
                         return <PlanningCard key={timeCard.id} ic={timeCard.icon} title={timeCard.title} description={timeCard.description} onSelect={setSelectedTime}></PlanningCard>
                      })
                  }
              </div>
              
          </div>
          <button className='p-4 border-2 rounded-lg  cursor-pointer px-10 text-white active:scale-105' onClick={ForCardSelect}>Submit</button>
    </div>
  )
}

export default Planning
