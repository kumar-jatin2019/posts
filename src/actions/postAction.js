import { GET_POSTS, GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST } from "./types";
import axios from 'axios';



// get all posts using Dispatcher //
export const getPosts = () => async (dispatch) => {

  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");

  dispatch({
    type: GET_POSTS,
    payload: result.data
  })
};


// get a post
export const getPost = (id) => ({
  type: GET_POST,
  payload: id,
});

// create a post
export const createPost = (post) => async dispatch => {
  const result = await axios.post("https://jsonplaceholder.typicode.com/posts", post);


  dispatch({
    type: CREATE_POST,
    payload: result.data,
  })
}

// update a post
export const updatePost = (post) => ({
  type: UPDATE_POST,
  payload: post,
});

// delete a post
export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});
