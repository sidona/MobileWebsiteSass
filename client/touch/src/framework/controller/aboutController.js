/**
 * Created by Sidona on 3/13/2016.
 */
/**
 * Created by Sidona on 3/13/2016.
 */

(function(define){
    "use strict";

    define(['model/appModel'],
        function(appModel){

            var aboutController=function($scope){
                console.log('event controller');

                $scope.content = appModel.getInstance().getData().pages[1].content;
                console.log('$scope.menu',$scope.menu);

            };
            return ['$scope',aboutController]
        })
}(define));