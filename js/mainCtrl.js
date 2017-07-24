angular.module('friendsList')
  .controller('mainCtrl', function ($scope) {
    $scope.friends = [
      "Braden",
      "Zaq",
      "Eli"
    ];

    $scope.items = [
        {text:'Devin', done:true}];

      $scope.addList = function() {
        $scope.items.push({text:$scope.itemText, done:false});
        $scope.itemText = '';
      };

  })
