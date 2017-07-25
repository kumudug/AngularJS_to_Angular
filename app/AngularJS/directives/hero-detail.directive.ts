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
export class HeroDetail implements ng.IComponentOptions {

    public bindings: any;
    public controller: any;
    public template: string;

    constructor() {
        this.bindings = {
            hero: '<',
            deleted: '&'
        };
        this.template = `
    <h2>{{$ctrl.hero.name}} details! (AngularJS)</h2>
    <div><label>id: </label>{{$ctrl.hero.id}}</div>
    <button ng-click="$ctrl.onDelete()">Delete</button>
  `;
        this.controller = function () {
            this.onDelete = () => {
                this.deleted(this.hero);
            };
        };
    }
};