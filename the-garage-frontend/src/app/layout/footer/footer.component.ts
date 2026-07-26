import { Component } from '@angular/core';

interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly columns: FooterColumn[] = [
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
      ],
    },
    {
      heading: 'Connect',
      links: [
        { label: 'GitHub', href: '#' },
        { label: 'Instagram', href: '#' },
        { label: 'X', href: '#' },
      ],
    },
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
