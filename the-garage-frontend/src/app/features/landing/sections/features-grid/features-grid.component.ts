import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ScrollRevealService } from '../../../../core/services/scroll-reveal.service';

interface FeatureCard {
  num: string;
  svgPath: string;
  title: string;
  description: string;
  svgViewBox?: string;
  svgExtra?: string;
}

@Component({
  selector: 'app-features-grid',
  imports: [],
  templateUrl: './features-grid.component.html',
  styleUrl: './features-grid.component.scss',
})
export class FeaturesGridComponent implements AfterViewInit {
  @ViewChildren('revealEl') revealElements!: QueryList<ElementRef>;

  readonly features: FeatureCard[] = [
    {
      num: '01',
      svgViewBox: '0 0 24 24',
      svgPath: 'M12 2l7 3v6c0 5-3.4 8.5-7 11-3.6-2.5-7-6-7-11V5l7-3z',
      title: 'Premium Experience',
      description: 'An elegant platform designed for collectors who expect more from the details.',
    },
    {
      num: '02',
      svgViewBox: '0 0 24 24',
      svgPath: '',
      svgExtra: '<rect x="3" y="6" width="18" height="13" rx="1.5"/><path d="M7 6V4a5 5 0 0110 0v2"/>',
      title: 'Secure Platform',
      description: 'Reliable authentication and secure transactions, engineered for peace of mind.',
    },
    {
      num: '03',
      svgViewBox: '0 0 24 24',
      svgPath: '',
      svgExtra: '<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/><circle cx="17.5" cy="9" r="2.4"/><path d="M15.5 13.2c2.6.3 4.5 2.3 4.5 4.8"/>',
      title: 'Community',
      description: 'Connect with people who share the same automotive passion you carry every day.',
    },
    {
      num: '04',
      svgViewBox: '0 0 24 24',
      svgPath: '',
      svgExtra: '<circle cx="8" cy="14" r="4.5"/><path d="M11.2 10.8L20 2M16.5 5.5L19 8M13.5 8.5L15.5 10.5"/>',
      title: 'Exclusive Membership',
      description: 'Access premium experiences today, and upcoming features reserved for members.',
    },
  ];

  constructor(private scrollReveal: ScrollRevealService) {}

  ngAfterViewInit(): void {
    const elements = this.revealElements.map((ref) => ref.nativeElement as Element);
    this.scrollReveal.observe(elements);
  }
}
