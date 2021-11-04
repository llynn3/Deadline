import axios from "axios";

const apiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://pawspawty.herokuapp.com";

axios.defaults.withCredentials = true;

export const defaultRoute = async () => {
  try {
    const response = await axios.get(apiURL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
} 

export const register = async (newUser) => {
  try {
    const response = await axios.post(`${apiURL}/auth/register`, newUser);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export const login = async (userInfo) => {
  try {
    const response = await axios.post(`${apiURL}/auth/login`, userInfo);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export const logout = async () => {
  try {
    await axios.get(`${apiURL}/auth/logout`);
  } catch (error) {
    console.error(error.message)
  }
}

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${apiURL}/posts`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export const getPostById = async (id, post) => {
  try {
    const response = await axios.get(`${apiURL}/posts/${id}`)
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export const createPost = async (newPost) => {
  try {
    await axios.post(`${apiURL}/posts/`, newPost);
  } catch (error) {
    console.error(error.message)
  }
}

export const updatePost = async (editPost, postId) => {
  try {
    const response = await axios.put(`${apiURL}/posts/${postId}`, editPost)
    return response.data;
  } catch (error) {
  console.error(error.message);
  }
}

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${apiURL}/posts/${postId}`)
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export const getComments = async () => {
  try {
    const response = await axios.get(`${apiURL}/comments`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export const createComment = async (newComment, postId) => {
  try {
    const response = await axios.post(`${apiURL}/comments/${postId}`, newComment);
    return response.data;
  } catch (error) {
    console.error(error.message)
  }
}