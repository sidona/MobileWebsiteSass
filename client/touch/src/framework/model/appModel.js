/**
 * Created by Sidona on 3/13/2016.
 */
(function(define){
    "use strict";

    define([],
    function(){
        var _instance,

            AppModel=function(){

                var _data=null;
                console.log('AppModel: created');

                var setData=function(val) {
                    _data = val;
                }

                    var getData=function(){
                        return _data;
                    }
                    //public Api
                    return{
                        getData:getData,
                        setData:setData
                    };

            };

        //class creation

        var instance=function(){
            if(!_instance){
                _instance=new AppModel()
            }
            return _instance;
        }
        return{ getInstance:instance}
    })
}(define));