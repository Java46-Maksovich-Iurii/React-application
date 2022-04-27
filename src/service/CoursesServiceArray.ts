import { Course } from "../models/Course";
import { getRandomNumber } from "../util/random";
import { courses } from "../config/service-config";
import CoursesServise from "./CoursesService";
export default class CoursesServiceArray implements CoursesServise {
    add(course: Course): void {
        const id = getRandomNumber(100000, 999999);
        course.id = id;
        courses.push(course);
    }
    remove(id: number): void {
        throw new Error("Method not implemented.");
    }
    update(id: number, course: Course): void {
        throw new Error("Method not implemented.");
    }
    get(): Course[] {
        return courses;
    }

}