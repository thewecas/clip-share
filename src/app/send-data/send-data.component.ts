import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.component.html',
  styleUrls: ['./send-data.component.scss'],
})
export class SendDataComponent implements OnInit {
  inputText!: string;
  isBtnDisabled = false;
  isClearInput = false;
  btnText = 'Send Data';
  clipId!: string;
  isDisplayClipId = false;
  constructor(private service: AppService) {}

  ngOnInit(): void {}

  handleSendData() {
    if (this.inputText.trim().length == 0) {
      return;
    }
    this.isBtnDisabled = true;
    this.btnText = 'Sending Data...';
    this.service.sendData(this.inputText.trim()).subscribe({
      next: (res) => {
        this.btnText = 'Data Sent..!';
        this.clipId = Object(res).id;
        this.isDisplayClipId = true;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  copyClipID() {
    navigator.clipboard.writeText(this.clipId);
  }

  clearInput() {
    this.inputText = '';
    this.isBtnDisabled = false;
    this.btnText = 'Send Data';
  }
}
