import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.component.html',
  styleUrls: ['./send-data.component.scss'],
})
export class SendDataComponent implements OnInit {
  inputText!: string;
  isBtnDisabled = false;
  isClearInput = false;
  btnInnerText = 'Send Data';
  clipId!: string;
  isDisplayClipId = false;
  constructor() {}

  ngOnInit(): void {}

  handleSendData() {
    if (this.inputText.trim().length == 0) {
      return;
    }

    this.isBtnDisabled = true;
    this.btnInnerText = 'Sending Data...';

    setTimeout(() => {
      this.btnInnerText = 'Data Sent.!';
      this.clipId = 'its working';
      this.isDisplayClipId = true;
    }, 1000);
  }

  copyClipID() {
    navigator.clipboard.writeText(this.clipId);
  }
}
