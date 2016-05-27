angular.module('angularApp').factory('pricesAjaxService', function ($http) {

  var URL = 'http://localhost:3000/prices/';

  return {
    create: create,
    list: list,
    read: read,
    update: update,
    _delete: _delete
  }

  function create(precos, callback) {
    $http.post(URL, precos).then(
      function successCallback(response) {
        callback(response.data);
      }, function errorCallback(response) {
        callback(response.data);
      });
  };

  function list(callback) {
    $http.get(URL).then(
      function successCallback(response) {
        callback(response.data);
      }, function errorCallback(response) {
        callback(response.data);
      });
  };

  function read(id, callback) {
    $http.get(URL + id).then(
      function successCallback(response) {
        callback(response.data);
      }, function errorCallback(response) {
        callback(response.data);
      });
  };
  function update(precos, callback) {
    $http.put(URL + precos._id, precos).success(
      function (response) {
        callback(response.data);        
      }).error(function (response) {
        callback(response.data);
      });
  };

  function _delete(precos, callback) {   
    $http.delete(URL + precos._id).success(
      function (response) {
        callback(response.data);        
      }).error(function (response) {
        callback(response.data);
      });
  };

});