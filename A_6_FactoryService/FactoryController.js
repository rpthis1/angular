/**
 * Created with JetBrains WebStorm.
 * User: marmarmar
 * Date: 11/19/13
 * Time: 4:58 AM
 * To change this template use File | Settings | File Templates.
 */

var app = angular.module("app",[]);

app.factory("Items", function(){


    var items = {};

    items.query = function ()

    {

        var arr =[{title: "Item 1", price:100}, {title:"Item 2", price:200}];
        return arr;

    }

    return items;
});



app.controller("FactoryController", function($scope, Items){

   $scope.items = Items.query();

});
