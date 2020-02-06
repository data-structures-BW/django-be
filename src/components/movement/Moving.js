import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {useDispatch, useSelector} from 'react-redux'
import { title, description, players, error_msg, position } from '../../actions/roomActions'
import {move} from '../../actions/gameActions'
import './Moving.scss'

const Moving = () => {
 
  


    const dispatch = useDispatch()
    
    const north = (n) => {
        dispatch(move(n))
        
        
    
}
const south = (s) => {
    console.log(s)
    dispatch(move(s))
    
    
    
}

const east = (e) => {
    dispatch(move(e))
    
 
}
const west = (w) => {
    dispatch(move(w))
    
    
 
}




    return(
        <div className="button-wrapper">
            <div className="moving-button" onClick={() => north({"direction":"n"})}>North</div>


            <div className="moving-button" onClick={() => south({"direction":"s"})}>South</div> 
            <div className="moving-button" onClick={() => east({"direction":"e"})}>East</div>
            <div className="moving-button" onClick={()=> west({"direction":"w"})}>West</div>
        </div>
    )
}

export default Moving