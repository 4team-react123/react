import React from "react";
import { BrowserRouter, Routes, Route,Outlet, Link } from "react-router-dom";
import Main from './pages/Main'; 
import Layout from './layout/layout';
import Recycle from "./pages/Recycle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Assuming you want Main to be the default content of Layout */}
          <Route index element={<Main />} />
          {/* You can add more nested routes if necessary */}
          
          {/* recycle */}
          <Route path="recycle" element={<Recycle />} />
          <Route path="/*" element={<Outlet/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
