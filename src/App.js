import React, { Component } from 'react';
import Home from "./Components/Home.js";
import Nav from './Components/Nav';
import Weather from './Components/Weather';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <div className='container-fluid p-0'> */}
        <div>
          <Nav></Nav>
          <Routes>
            <Route path="/Weather" element={<Weather />}
            >
            </Route>
            <Route path="/" element={<Home />}
            >
            </Route>
            {/* <Weather></Weather> */}
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;