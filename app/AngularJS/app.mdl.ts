import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';

import { HeroDetailComponent } from '../Angular/hero-detail.component';

(function () {
    'use strict';    

    var app = angular.module('mainApp', [
        // Angular modules 

        // Custom modules 
        
        // 3rd Party Modules
    ]);    

    app.directive('heroDetail', downgradeComponent({ component: HeroDetailComponent }) as angular.IDirectiveFactory );
})();