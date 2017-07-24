import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';

import { AppModule } from './app.module';
//import { HeroDetailComponent } from './hero-detail.component';

platformBrowserDynamic().bootstrapModule(AppModule);