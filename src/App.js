import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ZipSearch from '../src/components/Search/ZipSearch.jsx';
import ClothingSearch from './components/Search/clothingSearch';
import ElectronicSearch from './components/Search/electronicSearch';
import PharmaSearch from './components/Search/pharmaSearch';
import { createBrowserHistory } from 'history';
import { hotjar } from 'react-hotjar';
import  ReactGA  from 'react-ga';

function App() {

  const history = createBrowserHistory();
  
  history.listen(location => {
    ReactGA.initialize('G-Q7MMEHNDKG');
    ReactGA.set({page:location.pathname});
    ReactGA.pageview(location.pathname);
  })

  hotjar.initialize(2254498, 6)

  return (
    <div className="App">
 <hashRouter>
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
    </hashRouter>
    </div>
  );
}

export default App;
