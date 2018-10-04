import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import StageTwo from "./StageTwo";
import StageThree from "./StageThree";
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
const Main = () => (
  <main>
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/stagetwo' component={StageTwo}/>
    <Route path='/stagethree' component={StageThree}/> 
  </Switch>
</main>
)

const wrapper = document.getElementById("create-article-form");
ReactDOM.render(
  <BrowserRouter>    
      <Main />
      </BrowserRouter>,
    wrapper
  )