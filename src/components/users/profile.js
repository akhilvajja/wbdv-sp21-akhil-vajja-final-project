import React, {useEffect, useState} from 'react'
import ContentPublic from "./content-public";
import AdminContent from "./admin-content";
import {useHistory, useParams} from "react-router-dom"
import PrivateContent from "./private-content";
import Logout from "./logout";

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
        fetch(`http://wbdv-akhil-vajja-final-server.herokuapp.com/api/profile`, {
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
                    fetch(`http://wbdv-akhil-vajja-final-server.herokuapp.com/api/profile/${userId}`)
                        .then(response => response.json())
                        .then(otherUser => {
                            setOtherUser(otherUser)
                        })
                }

            })
        // }
    }, [userId])

    const logout = () => {
        fetch(`http://wbdv-akhil-vajja-final-server.herokuapp.com/api/logout`, {
            method: 'GET',
            credentials: "include",
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .catch(error => {
                console.log(error);
            })
    }

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
            <button onClick={logout}>
                Logout
            </button>
        </div>
    )
}
export default Profile