import React from 'react'
import HouseHelp from "./house-help";
import {Link, Route} from "react-router-dom";
import houseService from "../services/house-service";

export default class HouseManager
    extends React.Component {
    state = {
        houses: []
    }

    componentDidMount() {
        houseService.findAllHouses()
            .then(houses => this.setState({houses}))
        // .then(courses => this.setState({courses: courses}))
    }

    updateHouse = (house) => {
        houseService.updateHouse(house._id, house)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.houses = prevState.houses.map(c => {
                        if(c._id === house._id) {
                            return house
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }

    deleteHouse = (house) => {
        // alert("delete course " + course._id)
        houseService.deleteHouse(house._id)
            .then(status => {
                // this.setState({
                //   courses: this.state.courses.filter(c => c._id !== course._id)
                // })
                this.setState((prevState) => ({
                    houses: prevState.houses.filter(c => c._id !== house._id)
                }))
            })
    }

    addHouse = () => {

        const newHouse = {
            title: "New House",
            User: "me",
            lastModified: "2/10/2021"
        }
        houseService.createHouse(newHouse)
            .then(actualHouse => {
                this.state.houses.push(actualHouse)
                this.setState(this.state)
            })
    }

    render() {
        return(
            <div>
                <Link to="/">
                    <i className="fas fa-2x fa-home float-right"></i>
                </Link>
                <h1>House Service</h1>
                <div className="container-fluid">
                    <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
                    <i className="fas fa-2x fa-plus-circle float-right"
                       onClick={this.addHouse}></i>
                    <br/>
                    <br/>
                </div>


                <Route path="/services/house" exact={true} >
                    <HouseHelp
                        updateHouse={this.updateHouse}
                        deleteHouse={this.deleteHouse}
                        houses={this.state.houses}/>
                </Route>
            </div>
        )
    }
}