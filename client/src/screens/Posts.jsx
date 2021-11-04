import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../services";

const Posts = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then((fetchedPosts) => setPosts(fetchedPosts));
    }, []);



    return (
        <section>
            {posts.map((post) => (
                <div>
                    {props.user ? (
                        <>
                    <h3>{post.title}</h3>
                    <h4>{post.body}</h4>
                    <h5>{post.dog_breed}</h5>
                    </>
                    ) : (
                        <>
                        <Link to='/login'>Log in to view posts.</Link>
                        </>
                    )}
                    <section className="comment-container">
                        <Link to={`/posts/${post.id}`}>
                            Edit post.
                            </Link>
                        <Link to={`/comments/${post.id}`}>
                            Comments.
                        </Link>
                    </section>
                </div>
            ))}
        </section>
    );
};

export default Posts;