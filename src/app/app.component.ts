import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ClipShare';

  isSendData = true;
  isDarkMode$!: BehaviorSubject<boolean>;

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.service.theme = localStorage.getItem('theme') ?? 'light';
    this.isDarkMode$ = this.service.isDarkMode$;
  }

  toggleBtn(isSendData: boolean) {
    this.isSendData = isSendData;
  }

  handleThemeChange(value: string) {
    this.service.theme = value;
  }
}
