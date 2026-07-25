import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { FeaturesGridComponent } from './sections/features-grid/features-grid.component';
import { WhyGarageComponent } from './sections/why-garage/why-garage.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { MembershipTeaserComponent } from './sections/membership-teaser/membership-teaser.component';
import { FinalCtaComponent } from './sections/final-cta/final-cta.component';

@Component({
  selector: 'app-landing',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    FeaturesGridComponent,
    WhyGarageComponent,
    TestimonialsComponent,
    MembershipTeaserComponent,
    FinalCtaComponent,
    FooterComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
