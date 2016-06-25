angular.module('angularApp').factory('ajaxAPIService', function ($http) { 

  return {
    createEntity: _createEntity,
    listEntities: _listEntities,
    readEntity: _readEntity,
    updateEntity: _updateEntity,
    deleteEntity: _deleteEntity
  }
  
  //retorna as promessas, o SUCCESS e ERROR devem ser tratados pelo controller.
  //desta forma, a API AJAX não trabalha com os callbacks

  function _createEntity(URL, entity) {
    return $http.post(URL, entity);
  };

  function _listEntities(URL) {
    return $http.get(URL);
  };

  function _readEntity(URL, id) {
    return $http.get(URL + id);
  };
  function _updateEntity(URL, entity) {
    return $http.put(URL + entity._id, entity);
  };

  function _deleteEntity(URL, entity) {
    return $http.delete(URL + entity._id);
  };

});