angular.module('angularApp').factory('diversionAjaxService', function ($http) {

  var URL = 'http://localhost:3000/diversions/';

  return {
    create: create,
    list: list,
    read: read,
    update: update,
    _delete: _delete
  }

  function create(diversao, callback) {
    $http.post(URL, diversao).then(
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
  function update(diversao, callback) {
    $http.put(URL + diversao._id, diversao).success(
      function (response) {
        callback(response.data);        
      }).error(function (response) {
        callback(response.data);
      });
  };

  function _delete(diversao, callback) {   
    $http.delete(URL + diversao._id).success(
      function (response) {
        callback(response.data);        
      }).error(function (response) {
        callback(response.data);
      });
  };

});