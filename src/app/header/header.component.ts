import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() isDarkMode$!: BehaviorSubject<boolean>;
  @Output() themeChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleTheme() {
    this.isDarkMode$.next(!this.isDarkMode$.value);
    const theme = this.isDarkMode$.value ? 'dark' : 'light';
    this.themeChange.emit(theme);
  }
}
