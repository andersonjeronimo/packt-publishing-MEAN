angular.module('angularApp').factory('view', function () {
  return {
    app_name: 'Diversão MaisKidMais',
    data: new Date().toDateString(),
    tempo: {
      inicio: {
        hora: new Date().getHours(),
        minuto: new Date().getMinutes()
      },
      fim: {
        hora: new Date().getHours() + 1,
        minuto: new Date().getMinutes()
      }
    },
    telefone: {
      tipo: 'fixo',
      filtro: '(99)9999-9999'
    },
    fixo: {
      tipo: 'fixo',
      filtro: '(99)9999-9999'
    },
    celular: {
      tipo: 'celular',
      filtro: '(99)99999-9999'
    },
    operadoras: ['CLARO', 'OI', 'VIVO', 'TIM', 'NEXTEL', 'NET', 'OUTRA'],
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