import axios from 'axios'
import { useEffect, useState, useCallback } from 'react'
import { env, create } from "sanctuary";
import { env as flutureEnv } from "fluture-sanctuary-types";
import { encaseP, map, fork } from 'fluture';
import './App.css';
// Import types
const { pipe: P, T, curry2: C2, curry3: C3, I } = create({ checkTypes: true, env: env.concat(flutureEnv), });

const App = () => {
  // React state
  const [restaurants, setRestaurants] = useState([])

  // Functional pipeline, fantasy-land
  const pipeline = useCallback((fn, resource) => P([
      () => resource,
      (path) => encaseP(axios) (('GET', `http://localhost:1337/api/${path}`)),
      map(x => x.data.data),
      fork (I) (fn),
    ])(fn), [])
  
  useEffect(() => pipeline(setRestaurants,  'restaurants'),[pipeline])
  const render = ({id, attributes: {Name}}) => (<li key={id}>{Name}</li>) 
  
  return (
    <div className="App">
      <ul>
        {restaurants.map(render)}
      </ul>
    </div>
  )
}

export default App;
