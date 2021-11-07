import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../services";
import './AddPost.css';

const AddPost = () => {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");

    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            image,
            caption,
        }
        await createPost(newPost);
        history.push("/posts");
    };

    return (
        <section className="add">
            <h3 className="new-post">New post</h3>
        <form className="add-post" onSubmit={handleSubmit}>
            {image && <img src={URL.createObjectURL(image)} alt="preview" height="300" width="250" />}
            <label htmlFor="image">Image:</label>
            <input 
            id="image"
            type="file"
            required
            onChange={(e) => setImage(e.target.files[0])}
            />
            <label htmlFor="caption">Caption:</label>
            <textarea id="caption"
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            required
            tabIndex="3"
            cols="10"
            rows="5"
            />
            {/* <label htmlFor="dogBreed">Dog Breed:</label>
            <textarea id="dogBreed"
            type="text"
            value={dogBreed}
            onChange={(e) => setDogBreed(e.target.value)}
            required
            /> */}
            <button className="add-button" type="submit">Post!</button>
        </form>
        </section>
    )
}

export default AddPost;