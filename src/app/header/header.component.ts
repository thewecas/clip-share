import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  isDarkMode = false;

  constructor() {}

  ngOnInit(): void {
    this.toggleTheme();
  }

  toggleTheme() {
    document.documentElement.setAttribute(
      'theme',
      this.isDarkMode ? 'dark' : 'light'
    );
    this.isDarkMode = !this.isDarkMode;
  }
}
