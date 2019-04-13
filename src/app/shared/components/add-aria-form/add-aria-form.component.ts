import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AriaDetails } from 'src/app/presentation/interfaces/aria-details';
import { AriasService } from 'src/app/presentation/services/arias.service';

@Component({
  selector: 'app-add-aria-form',
  templateUrl: './add-aria-form.component.html',
  styleUrls: ['./add-aria-form.component.scss']
})
export class AddAriaFormComponent implements OnInit {
  public aria: AriaDetails = {
    category: '',
    description: '',
    name: [],
    image: '',
    stack: '',
  }

  public allArias: AriaDetails[];

  courses : string = '';

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private ariasService: AriasService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onNextFirstStep(form: NgForm) {
    this.aria = {
      category: form.value.category,
      description: form.value.description,
      name: [],
      image: form.value.image,
      stack: form.value.stack,
    };
  }

  onNextSecondStep(form: NgForm){
    let splitted = form.value.courses.split(",");
    this.aria.name = splitted;

    this.ariasService.getArias().subscribe((data: AriaDetails[]) => {
      if(data) {
        this.allArias = data;
        this.allArias.push(this.aria);
        this.ariasService.addAria(this.allArias).subscribe();
      }
    })
  }

}
