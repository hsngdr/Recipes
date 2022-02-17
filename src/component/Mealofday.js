import React from 'react';
import Random from './Random';
function Mealofday() {
  const meal='Chicken';
  const soup="Soup";
  const dessert="Dessert";

  return <div>
    <h1 className='main-title'>***Meal Of Day***</h1>
    <h4 className='sub-title'>Main course</h4>
    <Random props={meal}/>
    <h4 className='sub-title'>Soup</h4>
    <Random props={soup}/>
    <h4 className='sub-title'>Dessert</h4>
    <Random props={dessert}/>
  </div>;
}

export default Mealofday;
