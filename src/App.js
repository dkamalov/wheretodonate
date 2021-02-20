import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ZipSearch from '../src/components/Search/ZipSearch.jsx';
import Home from '../src/components/Pages/Home/Home.jsx';
import Results from '../src/components/Search/Results.jsx';
import ClothingSearch from './components/Search/clothingSearch';
import ElectronicSearch from './components/Search/electronicSearch';
import PharmaSearch from './components/Search/pharmaSearch';

function App() {
  return (
    <div className="App">
 <browserRouter>
      <Router>
          <Switch>
              <Route exact path = "/">
                <ZipSearch/>
              </Route>
              <Route path = "/clothing" component={ClothingSearch}></Route>
              <Route path = "/electronics" component={ElectronicSearch}></Route>
              <Route path = "/pharma" component={PharmaSearch}></Route>
              
         </Switch>
      </Router>
    </browserRouter>
    </div>
  );
}

export default App;
