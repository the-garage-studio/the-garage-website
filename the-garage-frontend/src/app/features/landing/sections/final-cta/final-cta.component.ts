import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollRevealService } from '../../../../core/services/scroll-reveal.service';

@Component({
  selector: 'app-final-cta',
  imports: [],
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.scss',
})
export class FinalCtaComponent implements AfterViewInit {
  @ViewChild('revealEl') revealEl!: ElementRef;

  constructor(private scrollReveal: ScrollRevealService) {}

  ngAfterViewInit(): void {
    this.scrollReveal.observe(this.revealEl.nativeElement);
  }
}
