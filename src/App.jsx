import './App.css'
import Home from './components/Home';
import Success from './components/Success';
import OrderPizza from './components/OrderPizza';
import { Switch, Route} from "react-router-dom";


function App() {
  

  return (
    <Switch> 
      <Route exact path="/">
    <Home/>
    </Route>
    <Route path="/success" >
    <Success/>
    </Route>
    <Route path="/order" >
      <OrderPizza />
    </Route>
    </Switch>
  )
}

export default App
