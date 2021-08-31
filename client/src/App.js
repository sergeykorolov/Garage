import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import Garage from "./pages/Garage/Garage";
import "./App.scss";

const App = () => {
  return (
      <BrowserRouter>
         <div className="wrapper">
            <Header/>
            <div className="container">
               <AppRouter/>
            </div>
         </div>
      </BrowserRouter>
  )
}

export default App;
