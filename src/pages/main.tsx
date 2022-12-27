import {getDocs, collection} from "firebase/firestore"
import {db} from "../config/firebase";
import {useState} from "react";

interface Post{
  id: string;
  description: string;
  userId: string;
  username: string;
  title: string;
}
export const Main = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsRef=collection(db,"posts");
  
  const getPosts= async() => {

    const data =await getDocs(postsRef)
    setPostsList(data.docs.map((doc)=> ({...doc.data(), id: doc.id})) as Post[]);

  } 
  
  return
  
    <div>Home Page </div>
  
}
