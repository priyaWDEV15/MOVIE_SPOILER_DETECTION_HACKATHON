import { getAuth, signOut } from '@firebase/auth';
import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core'
import Navbar2 from '../components/Navbar2'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Comment from './Comment';

const Dashboard = ({history}) =>{
    const logout = () =>{
       signOut(auth)
       .then(()=>{
           localStorage.removeItem('token')
           history.push('/')
       }).catch((e)=> alert(e.message))
    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            history.push('/')
        }
    },[])

    const auth=getAuth();
    const user=auth.currentUser;

    return(
        
        <div >
            <div >
               <div >
               
               </div>
                <div >
                <p >Welcome {user && user.displayName}</p>
                    <button
                        onClick={logout}
                        className=" bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-10 py-2 rounded text-xl font-bold"

                    >
                        Logout
                    </button>
                    <div>
                    <Navbar2/>
                   <Slider/>
                    <Comment/>
                 <Footer/>
                 </div>
                </div>
                
                
            </div>
        </div>
    )
};

export default Dashboard;