import React from 'react'
import { styled } from 'styled-components'
import Section from './Section'
import modelS from '../images/model-s.jpg'
import modelX from '../images/model-x.jpg'
import model3 from '../images/model-3.jpg'
import modelY from '../images/model-y.jpg'
import panel from '../images/solar-panel.jpg'
import roof from '../images/solar-roof.jpg'
import acc from '../images/accessories.jpg'


function Home() {
  return (
    <Container>
        <Section title="Model S" desc="Order Online for Touchless Delivery" bg={modelS} lftBtn="Custom Order" rightBtn="Demo Drive"/>
        <Section title="Model 3" desc="Order Online for Touchless Delivery" bg={model3} lftBtn="Custom Order" rightBtn="Demo Drive"/>
        <Section title="Model X" desc="Order Online for Touchless Delivery" bg={modelX} lftBtn="Custom Order" rightBtn="Demo Drive"/>
        <Section title="Model Y" desc="Order Online for Touchless Delivery" bg={modelY} lftBtn="Custom Order" rightBtn="Demo Drive"/>
        <Section title="Solar Panels" desc="Schedule a Virtual Consultation" bg={panel} lftBtn="Order Now" rightBtn="Learn More"/>
        <Section title="Solar Roof" desc="Produce Clean Energy From Your Roof" bg={roof} lftBtn="Order Now" rightBtn="Learn More"/>
        <Section title="Accessories" desc="" bg={acc} lftBtn="Shop Now" rightBtn="Learn More"/>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`