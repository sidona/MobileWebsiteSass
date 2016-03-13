/**
 * Created by Sidona on 3/13/2016.
 */
(function(define){
    "use strict";


    define([
        ],
        function ( )
        {
            /**
             * Route manageer
             * - to be used in main.js -> angular.config()
             *
             */
            var RouteManager = function ( $stateProvider, $urlRouterProvider)
            {

                $urlRouterProvider.otherwise("/site/home");


                $stateProvider

                    .state('/site/home', {

                        url: '/site/home',

                        templateUrl :function(){
                            return  "assets/view/home.html";
                        },
                        controller:'homeController'
                    })

                    .state('/site/about', {

                        url: '/site/about',

                        templateUrl :function(){
                            return  "assets/view/about.html";
                        },
                        controller:'aboutController'
                    })

                    .state('/site/event', {

                        url: '/site/event',

                        templateUrl :function(){
                            return  "assets/view/event.html";
                        },
                        controller:'eventController'
                    })

                    .state('/site/participants', {

                        url: '/site/participants',

                        templateUrl :function(){
                            return  "assets/view/participants.html";
                        },
                        controller:'participantsController'
                    })

                    .state('/site/info', {

                        url: '/site/info',

                        templateUrl :function(params){
                            return  "assets/view/info.html";
                        }
                    })

            };

            return ["$stateProvider", "$urlRouterProvider", RouteManager ];
        });

}( define ));

