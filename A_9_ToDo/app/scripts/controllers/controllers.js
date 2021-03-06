'use strict';

var app = angular.module('guthub',
    ['guthub.directives', 'guthub.services']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        controller: 'ListCtrl',
        resolve: {
          recipes: ["MultiRecipeLoader", function(MultiRecipeLoader) {
            return MultiRecipeLoader();
          }]
        },
        templateUrl:'/views/list.html'
      }).when('/edit/:recipeId', {
        controller: 'EditCtrl',
        resolve: {
          recipe: ["RecipeLoader", function(RecipeLoader) {
            return RecipeLoader();
          }]
        },
        templateUrl:'/views/recipeForm.html'
      }).when('/view/:recipeId', {
        controller: 'ViewCtrl',
        resolve: {
          recipe: ["RecipeLoader", function(RecipeLoader) {
            return RecipeLoader();
          }]
        },
        templateUrl:'/views/viewRecipe.html'
      }).when('/new', {
        controller: 'NewCtrl',
        templateUrl:'/views/recipeForm.html'
      }).otherwise({redirectTo:'/'});
}]);

app.controller('ListCtrl', ['$scope', 'recipes',
    function($scope, recipes) {
  $scope.recipes = recipes;
}]);

app.controller('ViewCtrl', ['$scope', '$location', 'recipe',
    function($scope, $location, recipe) {
  $scope.recipe = recipe;

  $scope.edit = function() {
    $location.path('/edit/' + recipe._id);
  };
}]);

app.controller('EditCtrl', ['$scope', '$location', 'recipe',
    function($scope, $location, recipe) {
  $scope.recipe = recipe;

  $scope.save = function() {
    $scope.recipe.$save(function(recipe) {
      $location.path('/view/' + recipe._id);
    });
  };

  $scope.remove = function() {
      $scope.recipe.$delete(function(recipe) {
          $location.path("/");
      });
  };
}]);

app.controller('NewCtrl', ['$scope', '$location', 'Recipe',
    function($scope, $location, Recipe) {
  $scope.recipe = new Recipe({
    ingredients: [ {} ]
  });

  $scope.save = function() {
    $scope.recipe.$save(function(recipe) {
      $location.path('/view/' + recipe._id);
    });
  };
}]);

app.controller('IngredientsCtrl', ['$scope',
    function($scope) {
  $scope.addIngredient = function() {
    var ingredients = $scope.recipe.ingredients;
    ingredients[ingredients.length] = {};
  };
  $scope.removeIngredient = function(index) {
    $scope.recipe.ingredients.splice(index, 1);
  };
}]);

app.controller('NavCtrl', ['$scope','$location',
    function($scope, $location) {

        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        }
    }]);

app.controller('SpinnerController', ['$scope','$location','$rootScope','$window',
    function($scope, $location, $rootScope, $window) {


        $rootScope.$on('$routeChangeStart', function () {

           if( $window.spinner !==  undefined)
           {
               console.log($window.spinner)
            $window.spinner.spin();
           }
        });

        $rootScope.$on('$routeChangeSuccess', function () {
            if( $window.spinner !==  undefined)
            {
                console.log($window.spinner)
                $window.spinner.stop();
            }
        });


    }]);