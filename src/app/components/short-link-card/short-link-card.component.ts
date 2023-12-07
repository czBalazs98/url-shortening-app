import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ShortLink} from "../../model/short-link";

import * as clipboard from "clipboard-polyfill";

@Component({
  selector: 'app-short-link-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './short-link-card.component.html',
  styleUrl: './short-link-card.component.scss'
})
export class ShortLinkCardComponent {

  @Input({required: true})
  shortLink!: ShortLink;

  @ViewChild("copyButton")
  copyButton!: ElementRef;

  isCopied: boolean = false;

  @Output()
  removeEvent = new EventEmitter<void>();

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
