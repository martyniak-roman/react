import './CourseComponent.css'
import type {CourseModel} from "../../models/CourseModel.ts";

export const CourseComponent = ({course}:{course:CourseModel}) => {
    return (
        <>
            <div>
                <li>{course.title} {course.monthDuration}</li>
            </div>
        </>
    );
};