/**
 * @memberOf app.states.home
 */
(function (module) {
  'use strict';
  // un controller c'est juste du code bete!!!!
  // un service c'est le code qui est appele par les controlleurs (il est en commun)
  function HomeController($scope, statesService) {
    var controller = this;

    $scope.search = { query: '', result: [] };

    controller.search = function () {
      // recupere le vrai resultat de la recherche
      statesService.search($scope.search.query).then(function (results) {
        $scope.search.results = results;
      });
    };

  }
  // angular retourne automatiquement une promesse ex: rejected , success ...etc une sorte de feedback sur ce qui s'est produit
  module.controller('homeController', [
    '$scope',
    'statesService',
    HomeController
  ]);

}(angular.module('app.states.home')));
