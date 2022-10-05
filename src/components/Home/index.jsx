import React from 'react'
import {NavLink} from 'react-router-dom';
import { units } from '../../utils/units'
import { Container } from './style'
import wait from '../../assets/imgs/wait.png'

const Home = () => {
  
  return (
    <Container>
      {units.map((unit) => 
        <NavLink key={unit.id} to={unit.path} className={'d-flex align-items-center my-4'}>
          <img src={wait} alt="wait" width={40}/>
          <span className='ms-2 title'>{unit.title}</span>
        </NavLink>
      )}
    </Container>
  )
}

export default Home