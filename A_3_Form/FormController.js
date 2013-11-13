/**
 * Created with JetBrains WebStorm.
 * User: marmarmar
 * Date: 11/13/13
 * Time: 1:23 PM
 * To change this template use File | Settings | File Templates.
 */


var app1 = angular.module("app", []);


app1.controller("FormController", function ($scope)
{

    $scope.funding ={starting: 0, needed:0};

    $scope.calculate = function ()
    {
        $scope.funding.needed =  parseInt( $scope.funding.starting * 10);
    }


});
