import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deletePost, getAllPosts } from "../services";

const Posts = (props) => {
    const [posts, setPosts] = useState([]);

    const params = useParams();
    const postId = params.id;
    console.log(params, "params")

    useEffect(() => {
        getAllPosts().then((fetchedPosts) => setPosts(fetchedPosts));
    }, []);
    console.log(posts)

    const handleDelete = async (e) => {
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
                            <button onClick={handleDelete}>Delete.</button>
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