import { Injectable, OnDestroy } from '@angular/core';

/**
 * ScrollRevealService
 *
 * Injectable service that encapsulates IntersectionObserver-based scroll
 * reveal logic. Elements with the CSS class `.reveal` become visible with
 * a fade-in + slide-up animation when they enter the viewport.
 *
 * Usage in a component:
 *   1. Inject the service in the constructor.
 *   2. Call `observe()` in `ngAfterViewInit`, passing each element or
 *      a NodeList/HTMLCollection of `.reveal` elements.
 *   3. The service automatically adds the `.in` class when an element
 *      intersects and stops observing it (fire-once behaviour).
 */
@Injectable({ providedIn: 'root' })
export class ScrollRevealService implements OnDestroy {
  private observer: IntersectionObserver | null = null;

  constructor() {
    this.initObserver();
  }

  // ---------- Public API ----------

  /**
   * Start observing a single element or multiple elements for intersection.
   * Accepts an Element, a NodeList, an HTMLCollection, or an array of Elements.
   */
  observe(target: Element | NodeList | HTMLCollection | Element[]): void {
    if (!this.observer) return;

    if (target instanceof Element) {
      this.observer.observe(target);
    } else {
      // NodeList, HTMLCollection, or Element[]
      Array.from(target as NodeList).forEach((el) => {
        this.observer!.observe(el as Element);
      });
    }
  }

  /**
   * Stop observing a specific element. Useful for manual cleanup.
   */
  unobserve(element: Element): void {
    this.observer?.unobserve(element);
  }

  /**
   * Disconnect the observer entirely (called automatically on service destroy).
   */
  disconnect(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  // ---------- Lifecycle ----------

  ngOnDestroy(): void {
    this.disconnect();
  }

  // ---------- Private ----------

  private initObserver(): void {
    // Guard: SSR environments do not have IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
  }
}
