angular.module('starter')

  .controller('DataCtrl', ['$scope', '$http', function ($scope, $http) {
    const key = "AIzaSyDdlmqPVTi0SQ2fp1eM8BynRp0Tlgy7kqo";
    const cID = "UCLgTRrF9oYBxb0bru_UzgZA&";
    const url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + cID  +"key=" + key;

      setInterval(function () {
            $http.get(url).success(function (data) {
                $scope.response = data;
                var subCount = data.items[0].statistics.subscriberCount;
                $scope.subs = subCount;
                console.log("Tivler has " + subCount + " subs!");
            }).error(function (data, status) {
                console.log("Sorry I fucked up...", status)
            });
        }, 2000);

    $scope.vidCount = function () {
      $http.get(url).success(function (data) {
        $scope.response = data;
        var vidCount = data.items[0].statistics.videoCount;
        $scope.vids = vidCount;
        console.log("Tivler has " + vidCount + " uploads!");
      }).error(function (data, status) {
        console.log("Sorry I fucked up...", status)
      });
    };

    $scope.viewCount = function () {

    }

  }]);
