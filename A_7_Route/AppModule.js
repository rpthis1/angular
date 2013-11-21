/**
 * Created with JetBrains WebStorm.
 * User: marmarmar
 * Date: 11/20/13
 * Time: 8:56 PM
 * To change this template use File | Settings | File Templates.
 */


var app = angular.module("app",[]);

var emails = [

    {id:0, from:"Marlon", subject:"hi",body:"Calling to say hi"},
    {id:1, from:"Nancy", subject:"hi 2",body:"Calling to say hi 2"},
    {id:2, from:"Alex", subject:"hi 3",body:"Calling to say hi 3"}

];


var routerOptions = function ($routeProvider)
{
    $routeProvider.when(
          "/view/:id",
          {controller:"DetailController",templateUrl: "view/detail.html"}
    ).when(
            "/",
        {controller:"ListController", templateUrl:"view/list.html"}
        )

};

app.controller("ListController", function ($scope){

    $scope.emails = emails;

});

app.controller("DetailController", function($scope, $routeParams){

      $scope.email = emails[$routeParams.id];
})

app.config(routerOptions);




