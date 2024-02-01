import Register from "./pages/Register"
import React, { useContext } from "react";
import "./style.scss"
import Login from "./pages/Login";
import Home from "./pages/Home";
import {BrowserRouter,Navigate,Route,Routes,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Frontpage from "./pages/Frontpage";

function App() {

  const {currentUser} = useContext(AuthContext) 
  
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to='/front'/>
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="front" element={<Frontpage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;