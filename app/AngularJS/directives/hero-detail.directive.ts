/*export function heroDetailDirective() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      hero: '=',
      deleted: '&'
    },
    template: `
      <h2>{{$ctrl.hero.name}} details! (AngularJS)</h2>
      <div><label>id: </label>{{$ctrl.hero.id}}</div>
      <button ng-click="$ctrl.onDelete()">Delete</button>
    `,
    controller: function() {
      this.onDelete = () => {
        this.deleted({hero: this.hero});
      };
    },
    controllerAs: '$ctrl'
  };
}*/

//The component directive example from above looks like this when expressed using the component API:
import { Hero }  from '../../Angular/hero';

interface IHeroDetailComponentBindings {
    hero: Hero;
    deleted: (hero: Hero) => void;
}

interface IHeroDetailComponentController extends IHeroDetailComponentBindings {
    onDelete(): void;
}

class HeroDetailComponentController implements IHeroDetailComponentController {

    public hero: Hero;
    public deleted: (hero: Hero) => void;

    constructor() {
    }

    onDelete(): void {
        this.deleted(this.hero);
    }

}

export class HeroDetail implements ng.IComponentOptions {

    public bindings: any;
    public controller: any;
    public templateUrl: string;
    public template: string;

    constructor() {
        this.bindings = {
            hero: '<',
            deleted: '&'
        };
        this.template = `
            <h2>{{$ctrl.hero.name}} details! (AngularJS)</h2>
            <div><label>id: </label>{{$ctrl.hero.id}}</div>
            <button ng-click="$ctrl.onDelete()">DeleteJS</button>`;
        //this.templateUrl = './hero-detail.directive.template.html';
        this.controller = HeroDetailComponentController;
        // this.controller = function () {
        //     this.onDelete = () => {
        //         this.deleted(this.hero);
        //     };
        // };
    }
};


/*
import { Hero }  from '../../Angular/hero';

interface IHeroDetailComponentBindings {
    hero: Hero;
    deleted: (hero: Hero) => void;
}

interface IHeroDetailComponentController extends IHeroDetailComponentBindings {
    onDelete(): void;
}

class HeroDetailComponentController implements IHeroDetailComponentController {

    public hero: Hero;
    public deleted: (hero: Hero) => void;

    constructor() {
    }

    onDelete(): void {
        this.deleted(this.hero);
    }

}

export class HeroDetail implements ng.IComponentOptions {

    //public bindings: any;
    public controller: any;
    public templateUrl: string;
    public template: string;

    bindings:any = {
            hero: '<',
            deleted: '&'
        };

    constructor() {
        
        this.template = `
            <h2>{{$ctrl.hero.name}} details! (AngularJS)</h2>
            <div><label>id: </label>{{$ctrl.hero.id}}</div>
            <button ng-click="$ctrl.onDelete()">Delete</button>`;
        this.controller = HeroDetailComponentController;
        // this.controller = function () {
        //     this.onDelete = () => {
        //         this.deleted(this.hero);
        //     };
        // };
    }
};*/