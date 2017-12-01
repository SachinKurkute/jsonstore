(function () {
	'use strict';

    var app = angular.module("jsonstore");
    app.controller('homeCtrl',function($scope,$state){
        var _jsonId = $state.params.id?$state.params.id:null;
        console.log(_jsonId);
        var editor;
        $scope.createEditorInstance = function(_e_id){
            require("ace/ext/old_ie");
            editor = ace.edit(_e_id);
            editor.setTheme("ace/theme/textmate");
            editor.setOption("showPrintMargin", false)
            editor.session.setMode("ace/mode/javascript");
        };
        $scope.makePretty = function(){
            try{
                var jSon = editor.getValue();
                editor.setValue(JSON.stringify(JSON.parse(jSon),undefined,4));
            }
            catch(err) {
                alert(err.message);
            }
        }
        $scope.makeString = function(){
            try{
                var jSon = editor.getValue();
                editor.setValue(JSON.stringify(JSON.parse(jSon)));
            }
            catch(err){
                alert(err.message);
            }
        }
    });
})();
