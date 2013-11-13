/**
 * Created with JetBrains WebStorm.
 * User: marmarmar
 * Date: 11/13/13
 * Time: 1:38 PM
 * To change this template use File | Settings | File Templates.
 */


var app = angular.module("app",[] );



app.controller("FormWatchController", function($scope)
{
      $scope.funding = {starting: 0, needed:0};


      var calc = function ()
      {
          $scope.funding.needed= $scope.funding.starting * 10;
      }

    $scope.$watch("funding.starting", calc);

});
