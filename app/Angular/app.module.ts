import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailDirective } from './hero-detail.directive.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [
    HeroDetailComponent,
    HeroDetailDirective
  ],
  entryComponents: [
    HeroDetailComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['mainApp'], { strictDi: true });
  }
}

//platformBrowserDynamic().bootstrapModule(AppModule);