import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../services";

const AddPost = () => {
    const [body, setBody] = useState("");
    const [dogBreed, setDogBreed] = useState("");

    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            body,
            dog_breed: dogBreed,
        }
        await createPost(newPost);
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