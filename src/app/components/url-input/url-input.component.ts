import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {ShortLink} from "../../model/short-link";
import {ShortLinkCardComponent} from "../short-link-card/short-link-card.component";
import {UrlShorteningService} from "../../service/url-shortening.service";
import {NzNotificationModule, NzNotificationService} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-url-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ShortLinkCardComponent, NzNotificationModule],
  templateUrl: './url-input.component.html',
  styleUrl: './url-input.component.scss'
})
export class UrlInputComponent {

  linkControl = new FormControl('', Validators.required);

  links: ShortLink[] = [];

  constructor(private urlShorteningService: UrlShorteningService, private notification: NzNotificationService) {
  }

  shortenUrl() {
    if (this.linkControl.valid) {
      const url = encodeURI(this.linkControl.value!);
      this.urlShorteningService.shortenUrl(url)
        .subscribe({
          next: response => {
            this.links.push({longLink: url, shortLink: response.result_url});
            this.linkControl.setValue('');
            this.linkControl.markAsPristine();
          },
          error: error => this.notification.blank('', error.error.error,
            {
              nzClass: 'text-white bg-red-400',
              nzPlacement: "top"
            })
        });
    }
  }

}
