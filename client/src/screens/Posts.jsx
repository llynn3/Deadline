import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { deletePost, getAllPosts } from "../services";
import './Posts.css';

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
    <section className="posts">
      {posts?.map((post) => (
        <div className="each-post">
          {props.user ? (
            <>
              <h3 className="username">{props.user.username}</h3>
              <img className="pic" src={post.image_url} alt={post.caption} height="400" width="290" />
              <h4 className="post-body">{post.caption}</h4>
            </>
          ) : (
            <>
              <Link to="/login">Log in to view posts.</Link>
            </>
          )}
          {/* <Posts key={posts.id} post={post} /> */}
          <section className="comments-link"><br/>
          <Link to={`/comments/${post.id}`}>Comments.</Link><br/><br/><br/><br/>
          <div className="edit-delete">
            <Link to={`/posts/edit/${post.id}`}>Edit post.</Link>
            <Link to={`/posts/${post.id}`} onClick={() => handleDelete(post.id)}>Delete.
            </Link>
            </div>
          </section>
        </div>
      ))}
    </section>
  );
};

export default Posts;
