import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main'; 
import WriteForm from'./pages/WriteForm';
import Layout from './layout/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="writeForm" element={<WriteForm />} />
          
        </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
