import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { units } from '../utils/units';
import Home from '../components/Home';
import Unit from '../components/Unit';

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {units.map((unit) => 
          <Route key={unit.id} path={`${unit.path}`} element={<Unit id={unit.id} title={unit.title}/>}/>
        )}
      </Routes>
    </div>
  )
}

export default Root