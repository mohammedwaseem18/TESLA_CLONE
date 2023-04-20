import React from 'react'
import styled from "styled-components"
import Section from './Section';

function Home() {
  return (
    <container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="ExistIng inventory"
      
      
      />
      <Section
       title="Model y"
       description="Order Online for Touchless Delivery"
       backgroundImg="model-y.jpg "
       leftBtnText="Custom order"
       rightBtnText="ExistIng inventory"
      
      />
      <Section
       title="Model 3"
       description="Order Online for Touchless Delivery"
       backgroundImg="model-3.jpg"
       leftBtnText="Custom order"
       rightBtnText="ExistIng inventory"
     
      />
      <Section
       title="Model x"
       description="Order Online for Touchless Delivery"
       backgroundImg="model-x.jpg"
       leftBtnText="Custom order"
       rightBtnText="ExistIng inventory"
      /> 

      <Section
             title="Lowest cost Solar panels in America"
             description="Money-back guarantee"
             backgroundImg="solar-panel.jpg"
             leftBtnText="Order now"
             rightBtnText="Learn more"


      />
      
      <Section
             title="Accessories"
             description=""
             backgroundImg="accessories.jpg"
             leftBtnText="Shop now"
             


      />


      
    </container>
  )
}

export default Home


const container = styled.div`

height:100vh;
z-index:10;


`
