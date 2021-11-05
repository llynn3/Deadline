import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { deletePost, getAllPosts } from "../services";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getAllPosts().then((fetchedPosts) => setPosts(fetchedPosts));
  }, []);
  // console.log(posts)
  // console.log(props.user.username)

  const handleDelete = async (postId) => {
    await deletePost(postId);

    history.push("/posts");
  };

  return (
    <section>
      {posts?.map((post) => (
        <div>
          {props.user ? (
            <>
              <h3>{props.user.username}</h3>
              <h4>{post.body}</h4>
              <h5>{post.dog_breed}</h5>
            </>
          ) : (
            <>
              <Link to="/login">Log in to view posts.</Link>
            </>
          )}
          {/* <Posts key={posts.id} post={post} /> */}
          <section className="comment-container">
            <Link to={`/posts/edit/${post.id}`}>Edit post.</Link>
            <Link to={`/posts/${post.id}`}>
              <button onClick={() => handleDelete(post.id)}>Delete.</button>
            </Link>
            <Link to={`/comments/${post.id}`}>Comments.</Link>
          </section>
        </div>
      ))}
    </section>
  );
};

export default Posts;
