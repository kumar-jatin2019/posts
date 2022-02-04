
import React, {useState, useEffect} from 'react';
import PostCard from "./PostCard";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/postAction";


const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.post.posts);


  // It works when component reloads like constructor alos [] is used so that it cannot execute till infinite
  useEffect(() => {
    dispatch(getPosts());
  }, []) 

debugger;
  if (posts && posts.length == 0) {
    return <h1>loading..</h1>;
  }
  return (
    <div className="row">
      
      {posts.map((postItem) => (
        <PostCard postItem={postItem}   key= {postItem.id}   />
      ))}
    </div>
  );
};

export default Posts;
