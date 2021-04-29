import React from 'react'
import {useParams} from "react-router-dom";

const Logout = () => {
    const {userId} = useParams()
    if (userId){
        userId.invalidate()
    }
}

export default Logout