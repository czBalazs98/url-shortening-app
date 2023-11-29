import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {ShortLink} from "../../model/short-link";
import {ShortLinkCardComponent} from "../short-link-card/short-link-card.component";

@Component({
  selector: 'app-url-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ShortLinkCardComponent],
  templateUrl: './url-input.component.html',
  styleUrl: './url-input.component.scss'
})
export class UrlInputComponent {

  linkControl = new FormControl('', Validators.required);

  links: ShortLink[] = [];

}
