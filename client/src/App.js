import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Products from './components/Products'
import Home from './components/Home'
import ProductView from './components/ProductView'
import NavBar from './components/NavBar'
import Department from './components/department'
import Departments from './components/departments'

function App() {
  return (
    // <div className="App">
    //   <h1>Products</h1>
    // </div>
    <>
    <NavBar/>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/departments" component={Departments} />
          <Route exact path="/departments/:id" component={Department} />
          <Route exact path="/products" component={Products} /> 
          <Route exact path="/products/:id" component={ProductView} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
