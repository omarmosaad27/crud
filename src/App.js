import React, {Component} from 'react'
import Courseform from './components/Courseform/Courseform'
import CourseList from './components/courseList/CourseList'

class App extends Component {
  state = {
    courses:[
      
    ],
    current:""
  }
  componentDidMount(){
    localStorage.getItem("allcourses") && this.setState({
      courses : JSON.parse(localStorage.getItem("allcourses"))
    })
  }
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }
  addcourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name:current})
    this.setState({courses,
      current:""
    })
    // add to local storage
    
    
    
  }
  componentDidUpdate(nextprops,nextstate){
    localStorage.setItem("allcourses",JSON.stringify(this.state.courses))
  }
  deleteCourse = (index) => {
    let courses = this.state.courses;
    let length = courses.length;

    courses.splice(index,1)
    this.setState({courses})
  }
  editCourse = (index,value) => {
    let courses = this.state.courses;
    let course = courses[index]
    course["name"] = value
    this.setState({courses})
  }
  render(){
    const courses = this.state.courses;
    const coursesList = courses.map((course,index) => {
        return <CourseList detailes={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    })
    return(
      <div className="App container">
        <h1>courses list</h1>
        <Courseform updateCourse={this.updateCourse} addcourse={this.addcourse} current={this.state.current}/>
        <ul>
          {this.state.courses.length > 0 ? coursesList : <div className="message">there are no courses to show</div>}
        </ul>
      </div>
    )
  }
}

export default App;
