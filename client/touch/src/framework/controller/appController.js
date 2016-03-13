/**
 * Created by Sidona on 3/13/2016.
 */
(function(define){
    "use strict";

    define(['model/appModel'],

    function(appModel){
        var appController=function(appDelegate,eventManager){
            console.log('appController initialized');
            var _appModel=appModel.getInstance();

            //private function

            function loadData(){
                appDelegate.loadData('../api/data.json')
                    .then(function(response){
                        console.log('data loader');
                        console.log(response);
                        _appModel.setData(response.data);
                        console.log('_appModel.getData()',_appModel.getData())
                        eventManager.sendMessage(eventManager.MAIN_DATA_LOADED)
                    })
            }
            //load data

            loadData();
        };
        return ['appDelegate','eventManager',appController]
    });
}(define));