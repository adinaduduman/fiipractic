import { Component, OnInit } from '@angular/core';
import {TrainersService} from '../../../shared/trainers.service';
import {AriasService} from '../../services/arias.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  trainers: any = [];
  arias: any = [];
  constructor(private trainersService: TrainersService,
              private ariasService: AriasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTrainers();
    this.getArias();
  }

  getTrainers() {
    this.trainersService.getTrainers().subscribe(data => {
      const allTrainers = data;
      this.route.params.subscribe((params: Params) => {
        this.trainers = Object.values(allTrainers).filter(trainerFiltered => trainerFiltered.category === params.aria);
      });
    });
    // const allTrainers = this.trainersService.getTrainers();
    // this would be used with set and get
    // const ariaCategory = this.ariasService.getAriaCategory();
    // this.trainers = allTrainers.filter(trainerFiletered => trainerFiletered.category === ariaCategory);
  }

  getArias() {
    // const allArias = this.ariasService.getArias();
    this.ariasService.getArias().subscribe(data => {
      const allArias = data;
      this.route.params.subscribe((params: Params) => {
        this.arias = Object.values(allArias).filter(ariaFiltered => ariaFiltered.category === params.aria);
      });
    });
    // this would be used with set and get
    // const ariaCategory = this.ariasService.getAriaCategory();
    // this.arias = allArias.filter(ariaFiltered => ariaFiltered.category === ariaCategory);
  }
}
