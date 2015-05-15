'use strict';

angular.module('cmPlagueModule', [])
.directive('cmPlague', function(){
  var o = {};

  o.restrict = 'A';
  o.templateUrl = '/directives/cm-plague/cm-plague.html';
  o.scope = {};
  // o.link = function($scope, element, attrs){};
  o.controller = function($interval, $http, $window, $scope, Tree){
    function getPlague(){
      var url = 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16';
      $window.jQuery.get(url, function(response){
        var random = response.data[0];
        var plagueId = random % 4;
        var plague;
        var damage;

        switch(plagueId){
          case 0:
            plague = 'fire';
            damage = random % 40;
            break;
          case 1:
            plague = 'bees';
            damage = random % 20;
            break;
          case 2:
            plague = 'termites';
            damage = random % 30;
            break;
          case 3:
            plague = 'brisk wind';
            damage = random % 10;
        }

        $scope.plague = plague;
        $scope.damage = damage;
        Tree.plague(damage)
        .then(function(){
          Tree.find()
          .then(function(res){
            $scope.$emit('trees', res.data.trees);
          });
        });
      });
    }

    $interval(getPlague, 3000);
  };

  return o;
});
