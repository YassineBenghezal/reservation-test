import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../interfaces/IResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  checkRoomAvailability(date: string, time: string): Observable<IResponse> {
    const endpoint = 'checkAvailability';
    const url = `${this.apiUrl}/resource/1337/available`;
    const oDate = new Date(date);
    const oTime = time.split(":");
    oDate.setHours(parseInt(oTime[0]), parseInt(oTime[1]));
   

    const params = new HttpParams()
      .set('datetime', oDate.toISOString());


    return this.http.get<any>(url, { params });
  }
}
