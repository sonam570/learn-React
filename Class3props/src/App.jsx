import React from 'react'
import Card from './component/Card'
const App = () => {
  return (
    <div className='parent'>
    
     <Card user='Piyush' age={30} img ='https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s='/>
     <Card user='Sonam' age ={28} img ='https://rukminim2.flixcart.com/image/480/640/kq8dua80/poster/c/k/3/small-poster-scenery-of-tiger-painting-3d-digital-print-original-imag4ac4mk4kp452.jpeg?q=90' />
     <Card user='Saloni' age ={18} img='https://media.istockphoto.com/id/2153711276/photo/modern-abstract-wavy-background.jpg?s=612x612&w=0&k=20&c=nsEvkJG98Q0Z69ioXrzPu0qYosaZ9UtzijEuzyTaI_k='/>
    </div>
  )
}

export default App
