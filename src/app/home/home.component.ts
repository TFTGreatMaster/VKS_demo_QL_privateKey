import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { } from 'electron';
import { AppService } from '../core/services/app.service';

interface IRefreshPrivateKey {
  message: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  privateKey: string = 'user1';
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }
  onRefreshPrivateKey(): void {
    this.appService.refreshPrivateKey(this.privateKey).subscribe({
      next: (res: IRefreshPrivateKey) => {
        alert(`${res.message}`)
        window.require('electron').ipcRenderer.send('writeKey', { key: this.privateKey });
      },
      error: (e: any) => {
        alert(`Server died` + e)
      },
      complete: () => {
        //finally close
      }
    }
    );
  }
}
