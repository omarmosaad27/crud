import React, {Component} from 'react'
import './CourseList.css'

class CourseList extends Component {
    state = {
        Edited : false
    }
    // course list
    
    renderCourse = () => {
        return(
                <li className="courselist">
                    <span>{this.props.detailes.name}</span>
                    <button className="btn" onClick={()=>{this.toggleEdit()}}>edit<i class="far fa-edit"></i></button>
                    <button className="btn-dark btn" onClick={()=> this.props.deleteCourse(this.props.index)}>delete <i class="far fa-trash-alt"></i></button>
                    
                </li>
        )
    }
    // toggle edit state 
    toggleEdit = () => {
        let {Edited} = this.state
        this.setState({
            Edited : !Edited
        })
    }
    // updateFormItem
    updateFormItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index ,this.input.value )
        this.toggleEdit()
    }
     // update from for editing 
        renderUpdateForm = () =>{
            return(
                <form onSubmit={this.updateFormItem}>
                    <input type="text" placeholder="update course name" ref={(v) => {this.input = v}} defaultValue={this.props.detailes.name}/>
                    <button className="btn">update</button>
                </form>
            )
    }
    render(){
        let {Edited} = this.state;
        return(
            <React.Fragment>
                {Edited ? this.renderUpdateForm() :this.renderCourse()  }
            </React.Fragment>
        )
    }
}

export default CourseList;
