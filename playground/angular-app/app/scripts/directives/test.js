'use strict';

angular.module('angularAppApp')
  .directive('test', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the test directive');
      }
    };
  });
