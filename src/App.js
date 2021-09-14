import React from "react";
import { data } from "./data.js";
import "./App.css";

import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Navigation from "./components/Navigation";

const App = () => {
  return (
   <main className="main">
      <Hero {...data.user}/>
      <Navigation {...data.navigation}/>
      <Posts content={data.content}/>
   </main>
  );
}

export default App;
