import { useEffect, useState } from "react";
import { getAllPosts, updatePost } from "../services";
import { useHistory, useParams } from "react-router-dom";
import './EditPost.css';

const EditPost = (props) => {
    // const [selectedPost, setSelectedPost] = useState({});
    const [caption, setCaption] = useState("");
    
    const history = useHistory();
    const params = useParams();

    const postId = params.id;

    useEffect(() => {
        const fetchPosts = async () => {
            const fetchedPosts = await getAllPosts();
            const post = fetchedPosts.find((post) => post.id === postId)

        }
        fetchPosts()
    }, )

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const editPost = {
                caption,
            }
            await updatePost(editPost, postId)
            history.push(`/posts`)
        } catch (error) {
            console.error(error.message)
        }
    }


    return (
        <section className="edit-post">
        <form className="edit-form" onSubmit={handleSubmit}>
            <label htmlFor="body">Caption:
            <input id="body" type="text" value={caption} onChange={(e) => setCaption(e.target.value)} /></label>
            <button className="edit-button" type="submit">Done editing</button>
        </form>
        </section>
    )
}

export default EditPost;