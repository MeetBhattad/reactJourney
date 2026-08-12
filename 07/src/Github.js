import {useParams} from "react-router";
import { useState, useEffect } from "react";

export default function Github(){

    const {name} = useParams();
    const[Profile, setProfile] = useState(null);

    async function fetchUser(){
        const response = await fetch(`https://api.github.com/users/${name}`);
        const data = await response.json();
        setProfile(data);
    }

    useEffect(()=>{
        fetchUser();
    }, [name]);

    return(
        <>
        <h1>My Github Profile</h1>

        <div>
            <img src = {Profile?.avatar_url}></img>
            <h2>{Profile?.login}</h2>
        </div>
        </>
    )
}