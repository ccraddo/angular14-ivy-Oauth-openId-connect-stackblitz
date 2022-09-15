import { Component, VERSION } from '@angular/core';
import { GoogleApiService } from './google-api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular-Google-Login-Example' + VERSION.major;

  constructor(private readonly google: GoogleApiService) {}
}
