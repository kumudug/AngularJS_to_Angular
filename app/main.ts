import './app.mdl.js';
import './controllers/home.ctrl.js';
import './views/home.tpl.html';
import './services/data.svc.js';
//import * as ng from 'angular';
//import './app.module.ts';

import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//ng.bootstrap(document.body, ['mainApp'], { strictDi: true });

platformBrowserDynamic().bootstrapModule(AppModule);