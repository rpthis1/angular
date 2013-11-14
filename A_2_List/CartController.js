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

            {title:"item one", price:15},
            {title:"item two", price:46}
        ];

        $scope.remove = function (index) {
            $scope.items.splice(index, 1);
        }

        $scope.add = function ()
        {

            $scope.items.splice(0,0,{title:"item three", price:58});
        }



    }
);

