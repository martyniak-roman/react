import type {ICourse} from "../../models/ICourse.ts";
import type {ReactNode} from "react";

interface CourseComponentProps {
    course: ICourse
    children: ReactNode
}

export const CourseComponent = ({course, children}: CourseComponentProps) => {
    return (
        <div className="my-8 ml-2.5">
            <h3 className="font-bold">{course.title}</h3>
            <p className="font-medium">{course.hourDuration} {course.monthDuration}</p>
            <p className="font-medium">{children}</p>
        </div>
    );
};