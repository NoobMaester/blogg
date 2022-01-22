
import { addDoc, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase-config";

const CreatePost = ({isAuth}) => {

    //States to keep track of input values
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");

    //function to reference our table in firestore database
    const PostsCollectionRef = collection(db, "posts");

    //redirect back to the home page
    const navigate = useNavigate();

    //function to add posts to our database
    const createPost = async () => {
        await addDoc(PostsCollectionRef, {
            title,
            post,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
        });
        navigate("/");
        console.log(auth.currentUser.metadata.lastSignInTime);
    };

    //to secure createpost route
    useEffect(() => {
        if (!isAuth){
            navigate("/login")
        }    
    })
    
    
    return (
        <div className='createpost'>
            <div className='container'>
                <h1>Create A Post</h1>
                <div className='inputgp'>
                    <label>Title:</label>
                    <input placeholder="Title..." onChange={(e) => {setTitle(e.target.value)}} />
                </div>
                <div className='inputgp'>
                    <label>Post:</label>
                    <textarea onChange={(e) => {setPost(e.target.value)}}></textarea>
                </div>
                <button className='btn' onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreatePost;