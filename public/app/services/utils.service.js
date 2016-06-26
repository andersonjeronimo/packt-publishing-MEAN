angular.module('angularApp').factory('utilsService', function () {  
  return {
    app_name: 'Diversão MaisKidMais',        
    filtro: '',
    ordem: '',
    checked: -1,       
    ordena: function (criterio) {
      this.ordem = criterio;
    },
    change: function (index) {
      if (this.checked == index) {
        this.checked = -1;
      } else {
        this.checked = index;
      }
    }
  }
});