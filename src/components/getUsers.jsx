import React from 'react'
import {getDocs,collection} from 'firebase/firestore'
import {db} from '../config/firebase'
import { useState,useEffect } from "react"
export const getUsers = () => {
    const [users,SetUsers]=useState([]);
    const userCollectionRef=collection(db,"usuarios");
    useEffect(()=>{
        const getUsersList=async ()=>{
            try{
             const data= await getDocs(userCollectionRef)
             const filterData=data.docs.map((doc)=>({...doc.data()}))
             const sortedData = filterData.sort((a, b) => a.turns - b.turns);
             SetUsers(sortedData);
            }catch(err){
                console.error(err);
            } 
        }
        getUsersList();
    },[])
    return users;
}
