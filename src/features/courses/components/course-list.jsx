import { useLoaderData } from "react-router-dom"
import Course from "./course";

const CourseList = () => {
    const loadedCourses = useLoaderData();
  return (
    <div className="row">
      {loadedCourses.map((course) => {
        return(
        <div className="col-3" key={course.id}>
            <Course {...course}/>
        </div>
        )
      })}
    </div>
  )
}

export default CourseList
