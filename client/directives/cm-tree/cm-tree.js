'use strict';

angular.module('cmTreeModule', [])
.directive('cmTree', function(){
  var o = {};

  o.restrict = 'A';
  o.templateUrl = '/directives/cm-tree/cm-tree.html';
  o.scope = {};
  o.link = function($scope, element, attrs){};
  o.controller = function($scope){};

  return o;
});
