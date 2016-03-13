/**
 * Created by Sidona on 3/13/2016.
 */
define(['angular','ngAnimate','uiRouter','framework/modules','framework/routeManager'],function(angular,ngAnimate,uiRouter,modules,routeManager){
    var app, appName='app';

    var initialize=function(){
        app=angular.module(appName,['ngAnimate','ui.router',modules])

        //config
        .config(routeManager)

        angular.element(document).ready(function(){
            console.log('App: bootstrapping');
            angular.bootstrap(document,[appName])
        });
    }
    return{
        init:initialize
    };

});