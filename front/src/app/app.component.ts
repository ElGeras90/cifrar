import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  title = 'front';

  enviarDatos() {
    const data = 'mensaje secreto';
    const encryptedData = CryptoJS.AES.encrypt(data, 'aB$7pQ2*Zu9!wC8xaB$7pQ2*Zu9!wC8xnpm').toString();

    this.http.post('http://localhost:3000/data', { data: encryptedData }).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
