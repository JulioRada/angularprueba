import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ngx-captcha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngxCatpcha';
  testInput2 = '';

  private readonly siteKey = '6LddS68UAAAAAHL-Nnq-OdhsYqSG_VZiijMfKthr';
  constructor(private reCaptchaV3Service: ReCaptchaV3Service) { }
  ngOnInit() {
    this.iniciar();
  }
  iniciar() {
    this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      console.log('This is your token: ', token);
    }, {
        useGlobalDomain: false
    });
  }
}
