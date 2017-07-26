import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <span><strong>AngularJS component directive upgarded to be Angular component</strong></span>
    <hero-detail-directive [hero]="hero1" (deleted)="heroDeleted()"></hero-detail-directive>
    <h2>{{hero.name}} details! (Angular)</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>{{hero.name}}</div>
    <button (click)="onDelete()">Delete</button>
  `
})
export class HeroDetailComponent {

  hero1:Hero;
  constructor() {
        this.hero1 = new Hero();
        this.hero1.name = 'Windstorm';
        this.hero1.id = 1;
  }
  

  heroDeleted(hero: Hero) {
    hero.name = 'Ex-' + hero.name;
  }

  @Input() hero: Hero;
  @Output() deleted = new EventEmitter<Hero>();
  onDelete() {
    this.deleted.emit(this.hero);
  }
}