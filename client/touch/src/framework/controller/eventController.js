/**
 * Created by Sidona on 3/13/2016.
 */

(function(define){
    "use strict";

    define(['model/appModel'],
        function(appModel){

            var eventController=function($scope){
                console.log('event controller');

                $scope.content = appModel.getInstance().getData().pages[2].content;
                console.log('$scope.menu',$scope.content);

            };
            return ['$scope',eventController]
        })
}(define));