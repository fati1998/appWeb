import './App.css';
import React from 'react';
import Nav from './Nav'; 
import addUser from './addUser';
import modifyUser from './modifyUser';
import listUsers from './listUsers';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="bloc_page">
        <Nav/>
        <section>
          <Switch>
            <Route path="/" exact component ={Home} />
            <Route path="/addUser" component ={addUser} />
            <Route path="/listUsers" component ={listUsers} />
            <Route path="/modifyUser" component ={modifyUser} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}
const Home = () =>(
  <h1> Page d'accueil </h1>

);





export default App;
