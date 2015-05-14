'use strict';

angular.module('trees')
.factory('Tree', function($http, nodeUrl){
  function Tree(){
  }

  Tree.create = function(){
    return $http.post(nodeUrl + '/trees');
  };

  Tree.find = function(){
    return $http.get(nodeUrl + '/trees');
  };

  return Tree;
});
