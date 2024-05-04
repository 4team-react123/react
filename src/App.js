import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Main from './component/Main';
import Layout from './layout/layout';
import MenuSearchResult from "./pages/MenuSearchResult";
import Nomal from "./pages/NomalPage";
import Plastic from "./pages/plasticPage";
import Food from "./pages/FoodPage";
import Paper from "./pages/PaperPage";
import Etc from "./pages/EtcPage";

import Eventpage from "./pages/Eventpage";
import EventDetail from "./component/Event/EventDetail";
import EventWrite from "./pages/EventWritePage";
import PlasticWrite from "./component/Recycle/RecycleWriteForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />

          {/* recycle */}
          <Route path="nomal">
            <Route index element={<Nomal />} />
            <Route path="search" element={<MenuSearchResult />} />
            {/* <Route path="write" element={<PlasticWrite />} />  */}
          </Route>
          <Route path="paper">
            <Route index element={<Paper />} />
            <Route path="search" element={<MenuSearchResult />} />
            {/* <Route path="write" element={<PlasticWrite />} />  */}
          </Route>
          <Route path="plastic">
            <Route index element={<Plastic />} />
            <Route path="search" element={<MenuSearchResult />} />
            {/* <Route path="write" element={<PlasticWrite />} />  */}
          </Route>
          <Route path="food">
            <Route index element={<Food />} />
            <Route path="search" element={<MenuSearchResult />} />
            {/* <Route path="write" element={<PlasticWrite />} />  */}
          </Route>
          <Route path="etc">
            <Route index element={<Etc />} />
            <Route path="search" element={<MenuSearchResult />} />
            {/* <Route path="write" element={<PlasticWrite />} />  */}
          </Route>

          {/* event */}
          <Route path="event">
            <Route index element={<Eventpage />} />
            <Route path="write" element={<EventWrite />} />
          </Route>
          <Route path="event/:id" element={<EventDetail />} />
          <Route path="*" element={<Outlet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
