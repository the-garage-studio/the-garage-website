import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ScrollRevealService } from '../../../../core/services/scroll-reveal.service';

@Component({
  selector: 'app-why-garage',
  imports: [],
  templateUrl: './why-garage.component.html',
  styleUrl: './why-garage.component.scss',
})
export class WhyGarageComponent implements AfterViewInit {
  @ViewChildren('revealEl') revealElements!: QueryList<ElementRef>;

  readonly statements = [
    'Built for enthusiasts.',
    'Inspired by automotive craftsmanship.',
    'Designed for long-term collectors.',
    'Technology meets passion.',
  ];

  constructor(private scrollReveal: ScrollRevealService) {}

  ngAfterViewInit(): void {
    const elements = this.revealElements.map((ref) => ref.nativeElement as Element);
    this.scrollReveal.observe(elements);
  }
}
