import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isScrolled = false;

  readonly navLinks = [
    { label: 'About', targetId: 'about' },
    { label: 'Features', targetId: 'features' },
    { label: 'Membership', targetId: 'membership' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 40;
  }

  scrollTo(targetId: string): void {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToJoin(): void {
    this.scrollTo('join');
  }
}
