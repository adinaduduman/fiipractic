import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  selectedCourse: any = '';
  constructor(private http: HttpClient) { }

  getCourseDetails(courseName: string) {
    return this.http.get(`https://fiipractic-adina.firebaseio.com/courses/${courseName}.json`)
  }

  setCourse(course:string) {
    this.selectedCourse = course;
  }

  getCourse() {
    return this.selectedCourse
  }
}
