import React, {useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'

const Logout = () => {
    const logout = () => {
        fetch(`https://wbdv-akhil-vajja-final-server.herokuapp.com/api/logout`, {
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
            <h1>Logout</h1>
            <button onClick={logout}>
                Logout
            </button>
        </div>
    );
}

export default Logout