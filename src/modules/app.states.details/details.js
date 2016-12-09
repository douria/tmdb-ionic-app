/**
 * @module app.states.two
 */
(function (module) {
  'use strict';

  var STATE_DETAILS = 'states.details';
  function movieDetailsResolver($stateParams, statesService) {
    //-afin de recupere l'id de l'url qu'on aura recupere alors on fait le stateParams
    return statesService.getMovie($stateParams.movieId);
  }

  function config($stateProvider) {
    $stateProvider.state(STATE_DETAILS, {
      data: { module: module, navBar: true },
      //-on extrait de l'url un truc qu'on va appeler movieId
      url: '/details/:movieId',
      views: {
        'content-smartphone': {
          controller: 'detailsController as detailsController'
        }
      },
      //-avant d'afficher a l'ecran il doit faire un truc ex avant d'afficher une info tu dois aller chercher l'info !!!
      resolve: {
        movieDetails: ['$stateParams', 'statesService', movieDetailsResolver]
      }
    });
  }

  function run($rootScope) { $rootScope.STATE_DETAILS = STATE_DETAILS; }

  module.constant('STATE_HOME', STATE_DETAILS);
  module.config(['$stateProvider', config]);
  module.run(['$rootScope', run]);

}(angular.module('app.states.details', ['app.states'])));
