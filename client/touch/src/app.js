/**
 * Created by Sidona on 3/13/2016.
 */
(function(document){
    "use strict";

    //define the init method

    function init(){
        console.log('App : Initializing');

        require(['config'],function(){
            console.log('Require config: Loaded')

            require(['main'],function(App){
                App.init();
            })
        });
    }

    //equivalent to jquery $(document).ready()

    if(document.readyState !='loading'){
        init();
    }else{
        document.addEventListener('DOMContentLoaded',init);
    }
}(document));