import { useEffect, useState } from "react";
import { getAllPosts, updatePost } from "../services";
import { useHistory, useParams } from "react-router-dom";

const EditPost = (props) => {
    const [selectedPost, setSelectedPost] = useState({});
    const [body, setBody] = useState("");
    const [dogBreed, setDogBreed] = useState("");
    
    const history = useHistory();
    const params = useParams();

    const postId = params.id;

    useEffect(() => {
        const fetchPosts = async () => {
            const fetchedPosts = await getAllPosts();
            const post = fetchedPosts.find((post) => post.id == postId)
            setSelectedPost(post)
            setBody(post.body)
            setDogBreed(post.dog_breed)
        }
        fetchPosts()
    }, [])

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const editPost = {
                body,
                dog_breed : dogBreed,
            }
            await updatePost(editPost, postId)
            history.push(`/posts/${postId}`)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="body">Body:
            <input id="body" type="text" value={body} onChange={(e) => setBody(e.target.value)} /></label>
            <label htmlFor="dogBreed">Dog Breed And Name:
            <input id="dogBreed" type="text" value={dogBreed} onChange={(e) => setDogBreed(e.target.value)} />
            </label>
            <button type="submit">Done editing</button>
        </form>
    )
}

export default EditPost;