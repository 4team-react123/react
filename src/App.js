import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Main from './pages/Main';
import Layout from './layout/layout';
import Recycle from "./pages/recycle/Recycle";
import MenuSearchResult from "./pages/recycle/MenuSearchResult";
import Plastic from "./pages/recycle/plasticPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Assuming you want Main to be the default content of Layout */}
          <Route index element={<Main />} />
          {/* You can add more nested routes if necessary */}

          {/* recycle */}
          <Route path="recycle">
            <Route index element={<Recycle />} />
          </Route>
          <Route path="plastic">
            <Route index element={<Plastic />} />
            <Route path="search" element={<MenuSearchResult />} />
          </Route>
          <Route path="/*" element={<Outlet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
