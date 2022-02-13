import * as React from "react";

import './style/app.css';


import Calculator from './Calculator.jsx';
import Gama from "./Gama.jsx";
import Loading from "./loading.jsx";



import
{
  Routes,
  Route,
} from "react-router-dom";

export default function App ()
{
  return (
    <div id ="home">
      <Routes>
        <Route path="/load" element={ <Loading /> } />
        <Route path="/gama" element={ <Gama /> } />
        <Route path="/" element={ <Calculator /> } />
      </Routes>
    </div>
  );
}