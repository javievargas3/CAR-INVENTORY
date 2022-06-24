import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Car_Inventory, Contact, About } from './components'
import './style.css'
import { Provider } from 'react-redux';
import { store } from '../src/Redux/store'

const temp_props = "Car Inventory"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Switch>


        <Route exact path="/">
          <Home title={temp_props}/>
        </Route>
        <Route path='/car_inventory'>
          <Car_Inventory></Car_Inventory>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>


      </Switch>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);