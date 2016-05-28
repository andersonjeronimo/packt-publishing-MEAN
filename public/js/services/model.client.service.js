angular.module('angularApp').factory('modelService', function () {
  function cria_numeros(n_ini, n_max, n_step) {
    var nums = [];
    for (var numero = n_ini; numero < (n_max + 1); numero += n_step) {
      nums.push(numero);
    }
    return nums;
  };
  function get_data_atual() {
    var data = new Date();
    return {
      dia: data.getDate(),
      mes: (data.getMonth() + 1),
      ano: data.getFullYear(),
      hora: data.getUTCHours(),
      minuto: data.getUTCMinutes()
    };
  };

  return {
    app_name: 'Diversão MaisKidMais',
    alert: 'Dicas e alertas aqui!',
    inicio: {
      hora: new Date().getUTCHours(),
      minuto: new Date().getUTCMinutes()      
    },
    fim: {
      hora: new Date().getUTCHours() + 1,
      minuto: new Date().getUTCMinutes()
    },
    filtro: '',
    ordem: '',
    checked: -1,    
    dias: cria_numeros(1, 31, 1),
    meses: cria_numeros(1, 12, 1),
    anos: cria_numeros(2005, 2030, 1),
    horas: cria_numeros(0, 23, 1),
    minutos: cria_numeros(0, 59, 5),
    operadoras: ['CLARO', 'VIVO', 'NEXTEL', 'OI', 'TIM', 'NET', 'OUTRA'],
    forma_pagamento: ['DEBITO', 'CREDITO', 'DINHEIRO', 'OUTRA'],
    
    calendario: {
      dia: get_data_atual().dia,
      mes: get_data_atual().mes,
      ano: get_data_atual().ano
    },

    data_selecionada: function (params) {      
      var dataNascimento = new Date();
      dataNascimento.setDate(this.calendario.dia);
      dataNascimento.setMonth(this.calendario.mes - 1);
      dataNascimento.setFullYear(this.calendario.ano);
      return dataNascimento;
    },

    data_atual: (function () {
      var data = new Date();
      return {
        dia: data.getDate(),
        mes: (data.getMonth() + 1),
        ano: data.getFullYear(),
        hora: data.getUTCHours(),
        minuto: data.getUTCMinutes()
      };
    })(),
       
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