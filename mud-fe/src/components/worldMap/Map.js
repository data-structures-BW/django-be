import React, { Component } from "react";
import { FlexibleXYPlot, LineSeries, MarkSeries } from "react-vis";
import {  useSelector } from 'react-redux';

import styled from "styled-components";


const StyledMap = styled.div`
    margin: 0 auto;
    width: 65%;
    height: 500px;
    flex: 1;
    padding: 3rem 3rem 3rem 3rem;
    position: relative;
    background-color: black;
`;

const Map = (props) => {
    const state = useSelector(state => state.game);
    console.log("state",state)
    
    
     
        

        const coordinates = [];
      
        const links = [];
       
        const room_data = props.roomData;
      
        for (let room in room_data) {
          
            let data = room_data[room][0];
            
            coordinates.push(data);
            for (let adjacentRoom in room_data[room][1]) {
                links.push([
                    room_data[room][0],
                    room_data[room_data[room][1][adjacentRoom]][0]
                ]);
               
            }
        }

        return (
            <StyledMap>
                <FlexibleXYPlot width={500} height={500}>
                    {links.map(link => (
                        <LineSeries
                            strokeWidth="2"
                            color="red"
                            data={link}
                            key={Math.random() * 100}
                        />
                    ))}

                    <MarkSeries
                        strokeWidth={3}
                        opacity="1"
                        size="4"
                        color="red"
                        data={coordinates}
                        style={{ cursor: "pointer" }}
                    />

                    <MarkSeries
                        strokeWidth={3}
                        opacity="1"
                        size="4"
                        color="blue"
                        data={[{ "x": state.position[0], "y": state.position[1] }]}
                        style={{ cursor: "pointer" }}
                    />
                </FlexibleXYPlot>
            </StyledMap>
        );
    
}

export default Map;