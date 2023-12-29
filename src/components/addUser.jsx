import React from 'react'
import {getDocs,collection,addDoc} from 'firebase/firestore'
import {db} from '../config/firebase'
import { useState,useEffect } from "react"

export const addUser = async(Nombre,Turns) => {
    const userCollectionRef=collection(db,"usuarios");
try{
    await addDoc(userCollectionRef,{nombre:Nombre,turns:Turns})
}
catch(err){
    console.error(err)
}
}
