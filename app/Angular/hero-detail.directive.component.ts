import { Directive, ElementRef, Injector, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

import { Hero }  from './hero';

@Directive({
  selector: 'hero-detail-directive'
})
export class HeroDetailDirective extends UpgradeComponent {
  @Input() hero: Hero;
  @Output() deleted: EventEmitter<Hero>;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('heroDetailDirectiveComponent', elementRef, injector);
  }
}