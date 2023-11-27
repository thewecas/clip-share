import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  URL = environment.URL;
  constructor(private http: HttpClient) {}

  sendData(data: string) {
    return this.http.post(`${this.URL}/add`, { data });
  }

  fetchData(id: string) {
    return this.http.get(`${this.URL}/${id}`);
  }
}
