import {useEffect, useState} from 'react';
import {getDocs, collection} from 'firebase/firestore'
import { db } from '../firebase-config';

const Home = () => {

    //setting states for the list of posts in our database
    const [postList, setPostList] = useState([]);

    //referencing our database
    const PostsCollectionRef = collection(db, "posts");
    useEffect(()=>{
        const getPosts = async () => {
            const data = await getDocs(PostsCollectionRef);
            console.log(data);
            
            setPostList(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        };
        getPosts();
    });

    return (
        <div>{postList.map((post) => {
            return <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.post}</p>
                <h3>@{post.author.name}</h3>
            </div>
        })}</div>
    )
}

export default Home
