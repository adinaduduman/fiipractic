import {Component, Input, OnInit} from '@angular/core';
import { CoursesService } from 'src/app/presentation/services/courses.service';

@Component({
  selector: 'app-category-title',
  templateUrl: './category-title.component.html',
  styleUrls: ['./category-title.component.scss']
})
export class CategoryTitleComponent implements OnInit {
  @Input() ariaInput;
  constructor(private courseService: CoursesService) { }

  ngOnInit() {
  }

  getCourseClicked(course) {
    this.courseService.setCourse(course);
  }
}
