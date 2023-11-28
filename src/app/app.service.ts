import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  URL = environment.URL;
  isDarkMode$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.URL = 'https://clipshare-mso5.onrender.com/note';
  }

  sendData(data: string) {
    return this.http.post(`${this.URL}`, { text: data });
  }

  fetchData(id: number) {
    return this.http.get(`${this.URL}?id=${id}`);
  }

  set theme(value: string) {
    document.documentElement.setAttribute('theme', value);
    this.isDarkMode$.next(value == 'dark');
  }
}
