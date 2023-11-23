import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/shortly-header/header/header.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {StatisticsComponent} from "./components/statistics/statistics.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, WelcomeComponent, StatisticsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'url-shortening-app';
}
