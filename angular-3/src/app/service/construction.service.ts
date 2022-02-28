import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Construction } from '../model/construction';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Construction[]>{
    return this.http.get<Construction[]>(`${this.apiUrl}`)
  }

  get(id: number): Observable<Construction> {
    return this.http.get<Construction>(`${this.apiUrl}/${id}`)
  }

  create(construction: Construction): Observable<Construction>{
    return this.http.post<Construction>(`${this.apiUrl}`, construction)
  }

  update(construction: Construction): Observable<Construction>{
    return this.http.patch<Construction>(
      `${this.apiUrl}/${construction.id}`,
       construction)
  }

  delete(id: number): Observable<Construction> {
    return this.http.delete<Construction>(`${this.apiUrl}/${id}`)
  }


}
