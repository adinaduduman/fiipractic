import {Component, OnInit} from '@angular/core';
import {AriasService} from '../../services/arias.service';
import { AriaDetails } from '../../interfaces/aria-details';

@Component({
  selector: 'app-arias',
  templateUrl: './arias.component.html',
  styleUrls: ['./arias.component.scss']
})
export class AriasComponent implements OnInit {
  arias: AriaDetails[];
  filteredArias: AriaDetails[];
  constructor(private ariasService: AriasService) {
  }

  ngOnInit() {
    this.getArias();
  }

  getArias(): void {
    this.ariasService.getArias().subscribe((data: AriaDetails[]) => {
      if(data) {
      this.arias = data;
      this.filteredArias = data;
     if (this.filteredArias.length < 1) {
       this.filteredArias = data;
     }
    }
    //  console.log(this.arias);
    });
    // this.arias = this.ariasService.getArias();
  }

  getAriaClicked(ariaCategory) {
   this.ariasService.setAriaCategory(ariaCategory);
  }
  getResponse(event) {
   this.filteredArias = this.arias.filter(aria => aria.stack.toLowerCase()
     .includes(event.toLowerCase()));
   console.log(this.filteredArias);
  }

}
