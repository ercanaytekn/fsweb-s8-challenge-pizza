import './App.css'
import Home from './components/Home';
import Success from './components/Success';
import OrderPizza from './components/OrderPizza';
import { Switch, Route} from "react-router-dom";
import { useState } from 'react'


function App() {
  
  const [siparis, setSiparis] = useState(null)

  return (
    <Switch> 
      <Route exact path="/">
    <Home/>
    </Route>
    <Route path="/success" >
    <Success siparis={siparis} />
    </Route>
    <Route path="/order" >
      <OrderPizza setSiparis={setSiparis}/>
    </Route>
    </Switch>
  )
}

export default App
