import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollRevealService } from '../../../../core/services/scroll-reveal.service';

@Component({
  selector: 'app-membership-teaser',
  imports: [],
  templateUrl: './membership-teaser.component.html',
  styleUrl: './membership-teaser.component.scss',
})
export class MembershipTeaserComponent implements AfterViewInit {
  @ViewChild('revealEl') revealEl!: ElementRef;

  constructor(private scrollReveal: ScrollRevealService) {}

  ngAfterViewInit(): void {
    this.scrollReveal.observe(this.revealEl.nativeElement);
  }
}
