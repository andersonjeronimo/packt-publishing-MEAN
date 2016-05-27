angular.module('angularApp').factory('registerAjaxService', function ($http) {

  var URL = 'http://localhost:3000/registers/';

  return {
    create: create,
    list: list,
    read: read,
    update: update,
    _delete: _delete
  }

  function create(cadastro, callback) {
    $http.post(URL, cadastro).then(
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
  function update(cadastro, callback) {
    $http.put(URL + cadastro._id, cadastro).success(
      function (response) {
        callback(response.data);        
      }).error(function (response) {
        callback(response.data);
      });
  };

  function _delete(cadastro, callback) {   
    $http.delete(URL + cadastro._id).success(
      function (response) {
        callback(response.data);        
      }).error(function (response) {
        callback(response.data);
      });
  };

});