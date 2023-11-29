import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatisticsCardComponent} from "../statistics-card/statistics-card.component";
import {UrlInputComponent} from "../url-input/url-input.component";

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, StatisticsCardComponent, UrlInputComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {

}
