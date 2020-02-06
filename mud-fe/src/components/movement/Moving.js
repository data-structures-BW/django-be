import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {move} from '../../actions/gameActions'
import './Moving.scss'

const Moving = () => {
    const state = useSelector(state => state.player);
    console.log("this is state",state)
  


    const dispatch = useDispatch()
    
    const north = (n) => {
        dispatch(move(n))
        
      
}
const south = (s) => {
    dispatch(move(s))
    

const east = (e) => {
    dispatch(move(e))

}
const west = (w) => {
    dispatch(move(w))
}




    return(
        <div className="button-wrapper">
            <div className="moving-button" onClick={() => north({'direction':'n'})}>North</div>


            <div className="moving-button" onClick={() => south({'direction':'s'})}>South</div> 
            <div className="moving-button" onClick={() => east({'direction':'e'})}>East</div>
            <div className="moving-button" onClick={()=> west({'direction':'w'})}>West</div>
        </div>
    )
  }
}

export default Moving