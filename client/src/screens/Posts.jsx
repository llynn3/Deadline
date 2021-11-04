import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePost, getAllPosts } from "../services";

const Posts = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then((fetchedPosts) => setPosts(fetchedPosts));
    }, []);
    console.log(posts)

    const handleDelete = async (postId) => {
        await deletePost(postId)
        console.log(postId, "postId")
    }


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
                        <Link to={`/posts/edit/${post.id}`}>
                            Edit post.
                            </Link>
                        <Link to={`/posts/${post.id}`}>
                            <button onClick={() => handleDelete(post.id)}>Delete.</button>
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