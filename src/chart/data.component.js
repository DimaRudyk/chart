angular.module('JetFoxApp', ['dx']).component('dataComponent', {
  bindings: {

  },

  controller: function () {
    var ctrl = this;


    $http({
      method: 'GET',
      url: 'api/WebChart/GetSensorHistori'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      })
  }
});
