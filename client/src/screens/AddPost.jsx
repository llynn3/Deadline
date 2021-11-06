import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../services";
import './AddPost.css';

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
        <section className="add">
            <h3 className="new-post">New post</h3>
        <form className="add-post" onSubmit={handleSubmit}>
            <label htmlFor="body">Body:</label>
            <textarea id="body"
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            tabIndex="3"
            cols="10"
            rows="5"
            />
            <label htmlFor="dogBreed">Dog Breed:</label>
            <textarea id="dogBreed"
            type="text"
            value={dogBreed}
            onChange={(e) => setDogBreed(e.target.value)}
            required
            />
            <button className="add-button" type="submit">Post!</button>
        </form>
        </section>
    )
}

export default AddPost;