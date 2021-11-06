import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { createComment, getPostById } from "../services";
import './PostDetails.css';

const PostDetails = (props) => {
    const [post, setPost] = useState({});
    const [content, setContent] = useState("");

    const history = useHistory();
    const params = useParams();

    const postId = params.id 

    useEffect(() => {
        const fetchedPost = async () => {
            const currentPost = await getPostById(postId);
            setPost(currentPost);
            // console.log(currentPost);
            console.log(props.user)
        }
        fetchedPost();
    }, [postId])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
            content,
        }
        const response = await createComment(newComment, postId);
        post.comments.push(response);
        
        history.push(`/comments/${postId}`)

    };


    return (
        <section className="post-details">
            <h3 className="user">{props.user.username}</h3>
            <h4>{post.body}</h4>
            <h3>Comments</h3>
            {post?.comments?.map((comment) => (
                <p>{comment.user.username}: {comment.content}</p> 
            ))}
                <h3 classname="add-comment">Add your own comment!</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="content"></label>
                    <input id="content"
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    />
                    <button className="post-comment-button" type="submit">Submit!</button>
                </form>
            </section>
    );
};

export default PostDetails;