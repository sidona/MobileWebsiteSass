/**
 * Created by Sidona on 3/13/2016.
 */

(function(define){
    "use strict";

    define(['model/appModel'],
        function(appModel){

            var participantsController=function($scope){
                console.log('event controller');

                $scope.content = appModel.getInstance().getData().pages[3].content;
                console.log('$scope.menu',$scope.menu);

            };
            return ['$scope',participantsController]
        })
}(define));