import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AriaDetails } from '../interfaces/aria-details';

@Injectable({
  providedIn: 'root'
})
export class AriasService {
  ariaCategory: any;
  constructor(private http: HttpClient) { }

  getArias() {
    return this.http.get<AriaDetails[]>('https://fiipractic-adina.firebaseio.com/arias.json');
  }
  setAriaCategory(ariaCategory) {
    this.ariaCategory = ariaCategory;
  }
  getAriaCategory() {
    return this.ariaCategory;
  }
  addAria(aria: any) {
    return this.http.put('https://fiipractic-adina.firebaseio.com/arias.json', aria)
  }
}
