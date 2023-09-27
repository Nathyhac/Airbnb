import React from 'react'
import Hero from './hero/Hero'
import Nav from './Nav/Nav'
import Card from './Card/Card'
import Data from './Data'
import './App.css'


function App() {
  const cards =  Data.map(data=>{
    return(

      <Card
      key={data.Id}
      img={data.Coverimg}
      Title={data.title}
      price={data.price}
      rating={data.stats.rating}
      review={data.stats.rewiewCount}
      location={data.location}
      />

    )
   
  })

  return (
    <div>
     <Nav/>
     <Hero/>
     <section className='card-list'>
     {cards}
     </section>
    </div>
  )
}

export default App
