import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-statistics-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './statistics-card.component.html',
  styleUrl: './statistics-card.component.scss'
})
export class StatisticsCardComponent {

  @Input({required: true})
  imageSrc!: string;

  @Input({required: true})
  title!: string;

  @Input({required: true})
  description!: string;

}
