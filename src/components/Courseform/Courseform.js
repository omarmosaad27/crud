import React from 'react'
import './Courseform.css'

const Courseform = (props) => {


    
    return(
        <form onSubmit={props.addcourse}>
            <input required type="text" placeholder="enter course name " onChange={props.updateCourse} value={props.current}/>
            <input type="submit" value="add course " className="btn"/>
        </form>
    )
}
export default Courseform