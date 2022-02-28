import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Drug } from '../model/drug';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Drug[]>{
    return this.http.get<Drug[]>(`${this.apiUrl}`)
  }

}
