# CdK Admin - FREE PREMIUM ANGULAR 5 MATERIAL DESIGN+FLEX LAYOUT ADMIN PANEL


DEMO:https://newproject-5d731.firebaseapp.com

to hire me, email me harikrishna266@gmail.com

for bugs use github issue tracker 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Version Up: NG v8.2.4

1. ObservableMedia
  --> MediaObserver.media$
  // https://github.com/angular/flex-layout/blob/master/CHANGELOG.md
2. ViewChild/ContentChild
  --> @ContentChild('foo', {static: false})
3. core/fullscreen.component.ts
  --> https://github.com/sindresorhus/screenfull.js/issues/126
  import * as screenfull from "screenfull";
  import {Screenfull} from "screenfull";

  screenfull.toggle(); ==> (screenfull as Screenfull).toggle();
4. ERROR in ./src/polyfills.ts
   Module not found: Error: Can't resolve 'core-js/es6/reflect'
   --> https://github.com/angular/angular-cli/issues/14542
   import 'core-js/es6/reflect'; --> import 'core-js/es/reflect';
   --> https://github.com/angular/angular-cli/issues/13954
   // ng v8에서는 자동, Comment out
   npm uninstall -S core-js

5. round-progressbar.component.ts
  WARNING: sanitizing unsafe style value [object Object]
  --> How to use bypassSecurityTrustStyle correctly
  --> https://stackoverflow.com/questions/43035989/how-to-use-bypasssecuritytruststyle-correctly
  --> 해결 안됨

6. Dynamic Module
  --> loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  --> https://stackoverflow.com/questions/56375703/angular-8-lazy-loading-modules-error-ts1323-dynamic-import-is-only-supporte
  --> https://stackoverflow.com/questions/56362035/do-i-need-to-opt-in-to-ivy-to-use-dynamic-imports-when-lazy-loading-routes-angu
  추가: tsconfig.json: module": "esnext", // add this line
  추가: tsconfig.app.json : module": "esnext" // root: tsconfig와 같게

7. Side Menu Scroll
// ::ng-deep .mat-drawer-inner-container {
.mat-drawer-inner-container {
  overflow: hidden!important;;
}
