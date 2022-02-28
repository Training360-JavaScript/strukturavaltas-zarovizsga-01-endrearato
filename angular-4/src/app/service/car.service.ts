import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Car } from '../model/car';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Car[]>{
    return this.http.get<Car[]>(`${this.apiUrl}`)
  }
}
