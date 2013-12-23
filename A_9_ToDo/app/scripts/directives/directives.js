'use strict';

var directives = angular.module('guthub.directives', []);

directives.directive('butterbar', ['$rootScope',
    function ($rootScope) {
        return {
            link: function (scope, element, attrs) {
                element.addClass('hide');

                $rootScope.$on('$routeChangeStart', function () {
                    element.removeClass('hide');
                });

                $rootScope.$on('$routeChangeSuccess', function () {
                    element.addClass('hide');
                });
            }
        };
    }]);

directives.directive('focus',
    function () {
        return {
            link: function (scope, element, attrs) {
                element[0].focus();
            }
        };
    });


directives.directive('bsNavbar', function ($location) {

    return {
        restrict: 'A',
        link: function postLink(scope, element, attrs, controller) {
            // Watch for the $location
            scope.$watch(function () {
                return $location.path();
            }, function (newValue, oldValue) {

                $('li[data-match-route]', element).each(function (k, li) {
                    var $li = angular.element(li),
                    // data('match-route') does not work with dynamic attributes
                        pattern = $li.attr('data-match-route'),
                        regexp = new RegExp('^' + pattern + '$', ['i']);

                    if (regexp.test(newValue)) {
                        $li.addClass('active');
                        var $collapse = $li.find('.collapse.in');
                        if ($collapse.length) $collapse.collapse('hide');
                    } else {
                        $li.removeClass('active');
                    }

                });
            });
        }
    };
});
