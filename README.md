<h1 align="center">
<img width="40" valign="bottom" src="https://angular.io/resources/images/logos/angular/angular.svg">
Reactive Pizza
</h1>
<h4 align="center">Reactive forms, Observables, Component architecture, Angular.</h4>

---

<a href="https://ultimateangular.com" target="_blank"><img src="https://ultimateangular.com/assets/img/banner.jpg"></a>

---

<div align="center" markdown="1">
<a href="#installation">Installation</a> |
<a href="https://toddmotto.com/reactive-pizza/">Live demo</a>
</div>

---

# Overview

This is an application to demonstrate Angular's reactive forms with a component architecture system. There's no backend, just an Observable store to push more content into.

# Installation

If you'd like to run this project, just clone the repo, run `yarn install` followed by a `yarn start` and you're good to go.

### On Windows:

In order to `yarn start` you'll need to change the `"build:dev"` line to read:
```json
  "build:dev": "set NODE_ENV=development && webpack-dev-server --inline --hot",
```
