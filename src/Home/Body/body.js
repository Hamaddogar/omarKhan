import React from 'react'
import Card1 from '../Body/card1'
import Card2 from '../Body/card2'
import Card3 from '../Body/card3'




  const  Body =()=>{
  return (
      <div>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img   style={{height:"500"}} src="https://images.pexels.com/photos/3404200/pexels-photo-3404200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img   style={{height:"500"}}src="https://images.pexels.com/photos/3732658/pexels-photo-3732658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img   style={{height:"500"}}src="https://images.pexels.com/photos/3576112/pexels-photo-3576112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

 <div>
 <div class="container">
  <div class="row">
    <div class="col-sm">
     <Card1/>
    </div>
    <div class="col-sm">
      <Card2/>
    </div>
    <div class="col-sm">
      <Card3/>
    </div>
    
  </div>
</div>
 </div>
 
      </div>
  )

 }
  export default Body
  