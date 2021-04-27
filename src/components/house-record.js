import React, {useState} from 'react'
import {Link} from "react-router-dom";

const HouseRecord = (
    {
        house,
        lastModified="1/1/2021",
        user="xyz",
        deleteHouse,
        updateHouse,
        loader
    }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(house.title)

    const saveHouse = () => {
        setEditing(false)
        const newHouse = {
            ...house,
            title: title
        }
        updateHouse(newHouse)
    }

    return(
        <tr>
            <td>
                {
                    !editing &&
                    <Link to={`/services/house/edit/${house._id}`}>
                        {house.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}/>
                }
            </td>
            <td>{house.user}</td>
            <td>{house.lastModified}</td>
            <td>
                <i onClick={() => deleteHouse(house)} className="fas fa-trash"></i>
                {/*<i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>*/}

                {
                    editing &&
                    <i onClick={() => saveHouse()} className="fas fa-check"></i>
                }

                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                }


            </td>
        </tr>)
}

export default HouseRecord