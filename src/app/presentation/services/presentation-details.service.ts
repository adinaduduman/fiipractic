import { Injectable } from '@angular/core';
import {PresentationDetails} from '../interfaces/presentation-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentationDetailsService {

  constructor(private http: HttpClient) { }

  getPresentationDetails(): Observable<any> {
    return this.http.get<PresentationDetails>('https://fiipractic-adina.firebaseio.com/presentationDetails.json');
  }
}
