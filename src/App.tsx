import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import SignIn from "./components/SignIn";
import Header from "./components/Header";

function App() {
  return (<>
    <div className="">

    </div>
        <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Hello World</h1>} />
          <Route path="/sign-in" element={<SignIn/>} />
        </Routes>
      </div>
    </BrowserRouter>
  </>);
}

export default App;;
