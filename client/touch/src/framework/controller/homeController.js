/**
 * Created by Sidona on 3/13/2016.
 */
(function(define){
    "use strict";

    define(['model/appModel'],
    function(appModel){
        var homeController=function($scope){
            console.log('home controller initializer');
            $scope.content=appModel.getInstance().getData().pages[0].content;
        };
        return ['$scope',homeController]
    })
}(define));