/**
 * Created with JetBrains WebStorm.
 * User: marmarmar
 * Date: 11/8/13
 * Time: 1:55 PM
 * To change this template use File | Settings | File Templates.
 */




var appModule = angular.module("app", []);

appModule.controller('CartController',function($scope)
    {
        $scope.items = [

            {title:"item one", price:10},
            {title:"item two", price:45}
        ];

        $scope.remove = function f(index) {
            $scope.items.splice(index, 1);
        }


    }
);

