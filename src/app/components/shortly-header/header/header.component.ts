import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MobileNavComponent} from "../mobile-nav/mobile-nav.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MobileNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMobile: boolean = true;

  isMobileNavOpen: boolean = false;

  ngOnInit() {
    this.isMobile = window.screen.width < 1024;
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
    document.body.classList.toggle('mobile-nav-opened');
  }
}
