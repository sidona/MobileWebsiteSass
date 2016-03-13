/**
 * Created by Sidona on 3/13/2016.
 */
(function(define){
    "use strict";

    define(['model/appModel'],
        function(appModel){
        var footerController=function($scope,eventManager){
            console.log('footer controller');

            function onMainDataLoaded(event) {
                $scope.menu = appModel.getInstance().getData().menu;
                console.log('$scope.menu',$scope.menu);
            }
            $scope.$on(eventManager.MAIN_DATA_LOADED,onMainDataLoaded)
        };
            return ['$scope','eventManager',footerController]
    })
}(define));