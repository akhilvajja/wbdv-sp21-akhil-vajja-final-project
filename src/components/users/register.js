import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const SERV_URL = process.env.SERVER_URL;

const Register = () => {
    const [user, setUser] = useState({})
    const history = useHistory()
    const register = () => {
        // TODO: move this to a service file
        fetch(`http://localhost:8080/api/register`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(user),
            headers: {
                'content-type': "application/json"
            }
        }).then(response => response.json())
            .catch(error => {
                console.log(error)
            })
            .then((actualUser) => {
                history.push("/profile")
            })
    }
    return(
        <div>
            <h1>Register</h1>
            <input
                value={user.first}
                onChange={(e) => setUser({...user, first: e.target.value})}
                placeholder="first name" className="form-control"/>
            <input
                value={user.last}
                onChange={(e) => setUser({...user, last: e.target.value})}
                placeholder="last name" className="form-control"/>
            <input
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="username" className="form-control"/>
            <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password" className="form-control"/>
            <input placeholder="password2" className="form-control"/>
            <select onChange={(e) => {
                const role = e.target.value
                setUser({...user, role: role})
            }}>
                <option value="ADMIN">Admin</option>
                <option value="HELPER">Helper</option>
                <option value="CUSTOMER">Customer</option>
            </select>
            <button onClick={register}>
                Register
            </button>
        </div>
    )
}

export default Register