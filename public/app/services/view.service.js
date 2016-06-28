angular.module('angularApp').factory('view', function ($location) {  
  return {
    app_name: 'Diversão MaisKidMais',
    operadoras : ['CLARO', 'OI', 'VIVO', 'TIM', 'NEXTEL', 'NET', 'OUTRA'],        
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
    },
    go_home : $location.path('/')    
  }
});