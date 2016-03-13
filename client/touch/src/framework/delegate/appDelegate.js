/**
 * Created by Sidona on 3/13/2016.
 */
(function(define){
    "use strict";

    //create service

   define([],
   function(){
       //App delegate

       var AppDelegate=function($http,$q){
           var resolve=function(response){
               var _q=$q.defer();
               _q.resolve(response);
               return _q.promise;
           },
               loadData=function(url){
                   //load json from api
                   return $http.get(url).then(function(response){
                       return resolve(response.data)
                   });
               }
           //return a public method
           return{
               loadData:loadData
           };
       };
       return['$http','$q',AppDelegate]
   });
}(define));