import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.scss'],
})
export class FetchDataComponent implements OnInit {
  inputText!: number | null;
  errorMessage!: string;
  outputText = '';
  btnText = 'Fetch Data';
  isBtnDisabled = false;
  constructor(private service: AppService) {}

  ngOnInit(): void {}

  handleFetchData() {
    this.btnText = 'Fetching Data';
    this.isBtnDisabled = true;
    if (this.inputText != null)
      this.service.fetchData(this.inputText).subscribe({
        next: (res) => {
          this.outputText = Object(res).text;
        },
      });
  }

  copyText() {
    navigator.clipboard.writeText(this.outputText);
  }

  clearInput() {
    this.inputText = null;
    this.isBtnDisabled = false;
    this.btnText = 'Fetch Data.';
  }
}
