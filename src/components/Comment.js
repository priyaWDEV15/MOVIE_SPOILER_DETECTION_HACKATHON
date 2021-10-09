import { useEffect, useState } from 'react';
import {db} from './firebase-config'
import {collection,getDocs, addDoc,doc, deleteDoc} from "firebase/firestore"  //importing functions to operate on firestore 


function Comment() {
  //creating variables to hold previous and change in states
  const [newName, setNewName] = useState("")
  const [newComment, setNewComment] = useState(0)
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db,"users");    // to refer to whole collection named "users" on firestore

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

//showing the users on the web comment
  return (
    <div class="border-blue-500 ">
  <div className="App"> 
  <input class="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
   placeholder="Name"
    onChange = {(event) => {
    setNewName(event.target.value);
    
    }}
    />

  <input 
  type="text"
  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  placeholder="comment"
  onChange = {(event) =>{
    setNewComment(event.target.value);
  }}
  />

  <button className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-10 py-2 rounded text-xl font-bold"
  onClick={createComment}>Add comment</button> 
  {users.map((user) => {
    
    return (
    <div>
      {""} 
      <h3 class="text-gray-900 leading-tight font-black">{user.name}</h3>
      <p class="text-gray-900 leading-tight">{user.comment}</p>
      <button className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-2 py-1 rounded text-xl font-bold"
      onClick ={() => {deleteComment(user.id)}}>delete comment </button>
    
    </div>
  );
    
    })}   
  
  
   </div>
   </div>
   );
  
}

export default Comment;
