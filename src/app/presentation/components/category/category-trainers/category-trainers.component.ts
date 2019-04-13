import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-trainers',
  templateUrl: './category-trainers.component.html',
  styleUrls: ['./category-trainers.component.scss']
})
export class CategoryTrainersComponent implements OnInit {
  @Input() trainersInput;
  @Input() ariaDescription;
  constructor() { }

  ngOnInit() {
  }

}
