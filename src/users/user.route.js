angular.module('userApp')
.config(function ($stateProvider, $urlRouterProvider) {
    // ui router helper methods 
    $urlRouterProvider.otherwise('/users');
    //if they go to anything other than /users, send them to /users
    $stateProvider
    // third party library
    // you oass it the name of the state and an object, which has properties
        .state('users', {
            url: '/users',
            templateUrl: 'users/user.html',
            controller: 'MainCtrl as vmUsers'
        })

})