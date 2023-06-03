import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import {useState,useEffect} from "react"
import { useLocation } from "react-router-dom";
import axios from "axios"

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  const [posts,setPosts]=useState([]);
  const { search } = useLocation();

useEffect(()=>{
  const fetchPosts = async()=>{
    try{
      const res = await axios.get("/posts"+search);
      // console.log(res);
      setPosts(res.data);
    }catch(error){
      console.error("Error fetching posts", error);
    }
    };
  fetchPosts();
},[search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}

