import { useEffect, useState } from 'react';
import axios from "axios";
import {db} from './firebase-config'
import {collection,getDocs, addDoc,doc, deleteDoc} from "firebase/firestore"  //importing functions to operate on firestore 


function Comment() {
  //creating variables to hold previous and change in states
  const [newName, setNewName] = useState("")
  const [newComment, setNewComment] = useState(0)
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db,"users");    // to refer to whole collection named "users" on firestore
  const url = 'http://26849bad-c0bd-4997-9f0a-d0707f006dc5.southeastasia.azurecontainer.io/score';
  const data = 'Movie was awesome';

  //add user function
  const createComment = async () => {
    await addDoc(usersCollectionRef, {name: newName, comment: (newComment)});
    };

  // to delete comment
  const deleteComment = async(id) => {
    const userDoc = doc(db, "users", id)
    await deleteDoc(userDoc);
  }

  //retrieving the data
  useEffect(() => {
    const getUsers = async () =>  {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(),id: doc.id})))
    };

    getUsers();
  }, []);

  useEffect(()=> {
    axios.post(url, {
      body: JSON.stringify(data),
      headers: {
        'dataType': 'json',
        'content-type': 'application/json'
      },
      // redirect: 'follow',
    })
    .then(response => {
      if (response.status === 200) {
        // console.log(JSON.parse(response));
        console.log(response)
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .catch(error => {
      console.error("error",error);
    });
  },[])

//showing the users on the web comment
  return (
    <div className="border-blue-500 ">
  <div className="App"> 
  <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
   placeholder="Name"
    onChange = {(event) => {
    setNewName(event.target.value);
    
    }}
    />

  <input 
  type="text"
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  placeholder="comment"
  onChange = {(event) =>{
    setNewComment(event.target.value);
  }}
  />

  <button className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-10 py-2 rounded text-xl font-bold"
  onClick={createComment}>Add comment</button> 
  {users.map((user) => (
    <div key={user.id}>
      <h3 className="text-gray-900 leading-tight font-black">{user.name}</h3>
      <p className="text-gray-900 leading-tight">{user.comment}</p>
      <button className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-2 py-1 rounded text-xl font-bold"
      onClick ={() => {deleteComment(user.id)}}>delete comment </button>
    </div>
  ))}   
  
  
   </div>
   </div>
   );
  
}

export default Comment;
