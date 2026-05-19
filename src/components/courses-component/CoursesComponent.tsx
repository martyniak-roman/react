import {coursesArray} from "../../data/array.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";

export const CoursesComponent = () => {
    return (
        <>
            {coursesArray.map((course, i) => (
                <CourseComponent key={i} course={course}>{course.modules}</CourseComponent>))}
        </>
    );
};