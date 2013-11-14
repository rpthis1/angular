/**
 * Created with JetBrains WebStorm.
 * User: marmarmar
 * Date: 11/14/13
 * Time: 12:18 PM
 * To change this template use File | Settings | File Templates.
 */





var app = angular.module("app", []);


app.controller("ShowHideController", function($scope){


    $scope.flag = {show: true};

    $scope.toggle = function ()
    {
        $scope.flag.show = !$scope.flag.show
    }

})     ;
