import React from 'react'
import {Link} from "react-router-dom";
import HouseRecord from "./house-record";


export default class HouseHelp extends
    React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Link to="/">
                    <i className="fas fa-home float-right fa-2x"></i>
                </Link>
                <h2>House Help {this.props.houses.length}</h2>
                <table className="table">
                    <thead></thead>
                    <tbody>
                    {
                        this.props.houses.map(house =>
                            <HouseRecord
                                key={house._id}
                                deleteHouse={this.props.deleteHouse}
                                updateHouse={this.props.updateHouse}
                                house={house}
                                title={house.title}
                                lastModified={house.lastModified}
                                user={house.user}/>)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}