import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <>
        <h1>Home</h1>
        <div className="list-group">
            <Link to="/register" className="list-group-item">
                Register
            </Link>
            <Link to="/login" className="list-group-item">
                Login
            </Link>
            <Link to="/profile" className="list-group-item">
                Profile
            </Link>
            <Link to="/logout" className="list-group-item">
                Logout
            </Link>

            <br/>
            <Link to="/services/house" className="list-group-item">
                House help
            </Link>
            <Link to="/services/moving" className="list-group-item">
                Moving help
            </Link>
            <Link to="/services/shopping" className="list-group-item">
                Shopping help
            </Link>
            <Link to="/services/plumber" className="list-group-item">
                Plumber help
            </Link>
            <Link to="/services/paint" className="list-group-item">
                Paint help
            </Link>
            <Link to="/maps" className="list-group-item">
                Maps
            </Link>
            <Link to="/editor" className="list-group-item">
                Request Editor
            </Link>
        </div>
    </>