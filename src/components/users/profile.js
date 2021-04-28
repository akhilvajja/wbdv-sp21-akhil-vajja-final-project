import React, {useEffect, useState} from 'react'
import ContentPublic from "./content-public";
import AdminContent from "./admin-content";
import {useParams} from "react-router-dom"
import PrivateContent from "./private-content";

const SERV_URL = process.env.SERVER_URL;

const Profile = () => {
    const {userId} = useParams()
    const [user, setUser] = useState({})
    const [otherUser, setOtherUser] = useState(null)
    useEffect(() => {
        // TODO: move this to a service file
        // if (userId) {
        //     fetch(`http://localhost:8080/api/profile/${userId}`)
        //         .then(response => response.json())
        //         .then(currentUser => setUser(currentUser))
        // } else {
        fetch("http://localhost:8080/api/profile", {
            method: 'GET',
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .catch(error => {
                console.log(error);
            })
            .then(currentUser => {
                setUser(currentUser)

                if (userId) {
                    fetch(`http://localhost:8080/api/profile/${userId}`)
                        .then(response => response.json())
                        .then(otherUser => {
                            setOtherUser(otherUser)
                        })
                }

            })
        // }
    }, [userId])
    return(
        <div>
            <h1>Profile</h1>
            {JSON.stringify(user)}
            <h1>Mini Services</h1>
            {
                user && user.role === "ADMIN" &&
                <AdminContent/>
            }
            {
                user && otherUser && user.id === otherUser.id &&
                <PrivateContent/>
            }
            {
                user && !otherUser &&
                <PrivateContent/>
            }
        </div>
    )
}
export default Profile