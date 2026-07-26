import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ScrollRevealService } from '../../../../core/services/scroll-reveal.service';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements AfterViewInit {
  @ViewChildren('revealEl') revealElements!: QueryList<ElementRef>;

  readonly testimonials: Testimonial[] = [
    {
      quote: 'The Garage feels less like an app and more like a private club. Every detail, down to the way it opens, feels considered.',
      name: 'M. Aguirre',
      role: 'FOUNDING MEMBER',
    },
    {
      quote: "I've been chasing this feeling since I was a kid at car shows. This is the closest a screen has come to that same thrill.",
      name: 'D. Reyes',
      role: 'COLLECTOR',
    },
    {
      quote: "Restrained, precise, and genuinely elegant. It's rare to find a digital space built with this much taste.",
      name: 'L. Fernandez',
      role: 'EARLY ACCESS',
    },
  ];

  constructor(private scrollReveal: ScrollRevealService) {}

  ngAfterViewInit(): void {
    const elements = this.revealElements.map((ref) => ref.nativeElement as Element);
    this.scrollReveal.observe(elements);
  }
}
