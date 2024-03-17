import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import SignUp from "./Components/Register";
import Navbar from "./Components/pages/Navbar";
import Login from "./Components/login";
 
function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Navbar/>}
                />
                <Route
                    path="/login"
                    element={<Login/>}
                />
            </Routes>
        </Router>
        </>
    );
}
 
export default App;



// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Components/login";
// import Signup from "./Components/Register";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/"  element={<Login />}></Route>
//           <Route path="/register" element={<Signup />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//       Hello World!
//       </div>
//     </>
//   )
// }

// export default App
