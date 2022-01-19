import {useEffect, useState} from 'react';
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore'
import { auth, db } from '../firebase-config';

const Home = ({isAuth}) => {

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

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    }

    return (
        <div className='homepage'>
            {postList.map((post) => {
            return <div key={post.id} className='post'>
                <div className='post_header'>
                    <h1>{post.title}</h1>
                    {isAuth && post.author.id === auth.currentUser.uid && (<button onClick={()=> {deletePost(post.id)}}>X</button>)}
                </div>
                
                <p>{post.post}</p>
                <h3>@{post.author.name}</h3>
            </div>
            })}
        </div>
    )
}

export default Home
