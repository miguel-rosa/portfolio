import React from "react";
import { data } from "./data";
import "./App.css";

import Posts from "./components/Posts";
import Header from "./components/Header";

const App = () => {
  return (
   <main className="main">
      <Header user={data.user} navigation={data.navigation}/>
      <Posts content={data.content} />
   </main>
  );
}

export default App;
