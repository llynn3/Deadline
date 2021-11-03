import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../services";

const PostDetails = (props) => {
    const [post, setPost] = useState({});
    const [comment, setComment] = useState("");

    const params = useParams();

    const postId = params.id 

    useEffect(() => {
        const fetchedPost = async () => {
            const currentPost = await getPostById(postId);
            setPost(currentPost);
            console.log(currentPost);
        }
        fetchedPost();
    }, [postId])


    return (
        <div>
            <h3>{post.title}</h3>
            <h4>{post.body}</h4>
            <h3>Comments:</h3>
            {post?.comments?.map((comment) => (
                <p>{comment.content}</p>
            ))}
        </div>
    );
};

export default PostDetails;