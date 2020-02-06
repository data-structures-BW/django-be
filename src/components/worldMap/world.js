import React, { useState, useEffect } from 'react'
import Map from "./Map"
import axios from 'axios';
import { connect } from 'react-redux'
import Moving from '../movement/Moving'


function World(props) {

    
    const [roomData, setRoomData] = useState([])

    useEffect(() => {
        axios
            .get(
                `https://cs25lambdamud.herokuapp.com/api/adv/getallrooms`
            )
            .then(res => {
                const rooms = res.data.rooms;
                setRoomData(rooms);
            })
            .catch(err => {
                console.log("Error",err)
            });
    }, [])

    return (
        <div
            style={{
                position: `relative`,
                width: `800px`,
                height: `400px`,
                margin: `20px auto`,
            }}>

            <Map roomData={roomData} />
            <Moving></Moving>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(World)