angular.module('angularApp').factory('incomeAjaxService', function ($http) {

  var URL = 'http://localhost:3000/incomes/';

  return {
    create: create,
    list: list,
    read: read,
    update: update,
    _delete: _delete
  }

  function create(receita, callback) {
    $http.post(URL, receita).then(
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
  function update(receita, callback) {
    $http.put(URL + receita._id, receita).success(
      function (response) {
        callback(response.data);        
      }).error(function (response) {
        callback(response.data);
      });
  };

  function _delete(receita, callback) {   
    $http.delete(URL + receita._id).success(
      function (response) {
        callback(response.data);        
      }).error(function (response) {
        callback(response.data);
      });
  };

});