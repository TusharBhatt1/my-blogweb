import React, { useEffect, useState } from 'react'


const getData=(key,value)=>{
    let saveddata=JSON.parse(localStorage.getItem(key))
    if(saveddata) return saveddata
    return value
}


export default function LocalStorage(key,value) {
 
    let [updatedvalue,setupdatedvalue]=useState(()=>{
        return getData(key,value)
    })


    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(updatedvalue))
    },[updatedvalue])
 
    return [updatedvalue,setupdatedvalue]
}
