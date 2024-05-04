// App.js

import React from "react";
import Header from "../component/Header";
import MainContent from "../component/MainContent";
import Footer from "../component/Footer";

function App() {
  return (
    <div className="frame">
      <section className="total">
        <Header />
        <MainContent />
        <Footer />
      </section>
    </div>
  );
}

export default App;
