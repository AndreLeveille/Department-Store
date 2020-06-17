import React, {Fragment,} from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import {Container,} from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Products from './components/Products'
import ProductForm from './components/ProductForm'


const App = () => (
  <Fragment>
    <Container>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/new" component={ProductForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)


export default App;
