import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createPost, updatePost } from "../services";

const AddPost = () => {
    const [body, setBody] = useState("");
    const [dogBreed, setDogBreed] = useState("");

    const history = useHistory();
    const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            body,
            dog_breed: dogBreed,
        }
        if (params.id) {
            await updatePost(params.id, newPost) 
        } else {
        await createPost(newPost);
        }
        history.push("/posts");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="body">Body:</label>
            <input id="body"
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            />
            <label htmlFor="dogBreed">Dog Breed:</label>
            <input id="dogBreed"
            type="text"
            value={dogBreed}
            onChange={(e) => setDogBreed(e.target.value)}
            required
            />
            <button type="submit">Post!</button>
        </form>
    )
}

export default AddPost;