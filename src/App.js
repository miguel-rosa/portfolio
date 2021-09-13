import React, {useState, useCallback, useEffect} from "react";
import data from "./data.json";
import "./App.css";

import Hero from "./components/Hero";
import Posts from "./components/Posts";
import Navigation from "./components/Navigation";

import { GET_NEWS } from "./api";

const API_KEY = "08c5dbee83de4c7b8534d96ccedeb8b9";

const App = () => {

  const [posts, setPosts] = useState([]);

  const loadPosts = useCallback( async () => {
    const { url, options } = GET_NEWS(API_KEY);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log("json", json);
    if(json.status === "ok") setPosts(json.articles)
  }, []);

  useEffect(() => {
    loadPosts();
  }, [loadPosts])

  useEffect(() => {
    console.log("posts", posts)
  }, [posts])


  return (
   <main className="main">
      <Hero {...data.user}/>
      <Posts posts={posts}/>
      <Navigation {...data.navigation}/>
   </main>
  );
}

export default App;
