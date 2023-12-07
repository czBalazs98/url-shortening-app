import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShortLink} from "../../model/short-link";

import * as clipboard from "clipboard-polyfill";

@Component({
  selector: 'app-short-link-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './short-link-card.component.html',
  styleUrl: './short-link-card.component.scss'
})
export class ShortLinkCardComponent {

  @Input({required: true})
  shortLink!: ShortLink;

  @ViewChild("copyButton")
  copyButton!: ElementRef;

  isCopied: boolean = false;

  copyToClipboard(value: string) {
    clipboard.writeText(value);
    this.isCopied = true;
    this.copyButton.nativeElement.textContent = 'Copied!';
    this.copyButton.nativeElement.disabled = true;

    setTimeout(() => {
      this.isCopied = false;
      this.copyButton.nativeElement.textContent = 'Copy';
      this.copyButton.nativeElement.disabled = false;
    }, 2000);
  }
}
