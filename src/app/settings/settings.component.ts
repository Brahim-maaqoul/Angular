import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-settings',
  template: ` <p #ez (click)="ez.innerHTML='gyrooooooo'">I am the settings component</p> `,
})
export class SettingsComponent {}