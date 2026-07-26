import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ScrollRevealService } from '../../../../core/services/scroll-reveal.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('revealEl') revealElements!: QueryList<ElementRef>;

  constructor(private scrollReveal: ScrollRevealService) {}

  ngAfterViewInit(): void {
    const elements = this.revealElements.map((ref) => ref.nativeElement as Element);
    this.scrollReveal.observe(elements);
  }
}
