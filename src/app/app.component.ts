import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule, SettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learning';
}
