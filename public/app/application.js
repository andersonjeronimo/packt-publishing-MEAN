angular.module('angularApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.mask']);
// angular.element(document).ready(function () {
//   angular.bootstrap(document, ['angularApp']);
// });

angular.module('angularApp').controller('mainController', function ($scope, $http, $timeout, $interval, $routeParams,
  view, $location) {
    
  $scope.view = view;    

  $scope.pageClass = 'default-class';

  $scope.partial = false;

  $scope.isCollapsed = true;

  $scope.showPartial = function () {
    if ($scope.partial) {
      $scope.partial = false;
    } else {
      $scope.partial = true;
    }
  }
  
  //listaCadastros();
  // getConfiguracao();
  // listaDespesas();
  // listaReceita();

  //calculo para pagamento
//   $scope.calculaValor = function (player) {
//     var index = player.historico.length - 1;
//     if (player.historico[index].com_meia) {
//       player.historico[index].adicional = $scope.model.config[0].valor_par_meias;
//     } else {
//       player.historico[index].adicional = 0;
//     }
//     player.historico[index].valor_final = (
//       (player.historico[index].valor_total) -
//       (player.historico[index].desconto + player.historico[index].adicional)
//       );
//     player.historico[index].troco = (
//       (player.historico[index].valor_pago) -
//       (player.historico[index].valor_final));
//   }; 
//
  function formata_data(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

//   $scope.filtra_receita_por_data = function () {
//     var data = get_data_selecionada();
//     $scope.model.filtro_receita = formata_data(data);
//   };
// 
//   $scope.update_total_receita = function () {
//     $scope.model.total_receita = 0;
//     $scope.model.f_receitas.forEach(function (receita) {
//       $scope.model.total_receita += receita.valor;
//     });
//   };
// 
//   $scope.filtra_despesa_por_data = function () {
//     var data = get_data_selecionada();
//     $scope.model.filtro_despesa = formata_data(data);
//   };
// 
//   $scope.update_total_despesa = function () {
//     $scope.model.total_despesa = 0;
//     $scope.model.f_despesas.forEach(function (despesa) {
//       $scope.model.total_despesa += despesa.valor;
//     });
//   };

  
  // $scope.standBy = function (cadastro) {
  //   if (cadastro.standing_by == false) {
  //     cadastro.standing_by = true;
  //     //historico      
  //     var novo_historico = {
  //       data: new Date(),
  //       inicio: new Date(),
  //       fim: new Date(),
  //       tempo_restante: new Date(),
  //       valor_total: 0,
  //       valor_final: 0,//valor a pagar
  //       desconto: 0,
  //       valor_pago: 0,
  //       troco: 0,
  //       com_meia: false,
  //       adicional: 0,
  //       forma_pagamento: '',
  //       pago: false,
  //       progresso: 0
  //     };
  //     cadastro.historico.push(novo_historico);
  //     ajaxCadastro.updateCadastro(cadastro, function () {
  //       listaCadastros();
  //       $location.path('/');
  //     });
  //   }
  // };

  // function hora_valida() {
  //   if ($scope.model.fim.hora > $scope.model.inicio.hora) {
  //     return true;
  //   } else if ($scope.model.fim.hora == $scope.model.inicio.hora) {
  //     if ($scope.model.fim.minuto > $scope.model.inicio.minuto) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     return false;
  //   }
  // }

//   $scope.iniciaBrincadeira = function (cadastro) {
//     if (cadastro.brincando == false && cadastro.standing_by == true) {
//       if (hora_valida()) {
//         cadastro.brincando = true;
//         cadastro.standing_by = false;
//         var last_index = (cadastro.historico.length) - 1;
// 
//         var inicio = new Date();//.setHours(inicio.hora, inicio.minuto);
//         inicio.setHours(angular.copy($scope.model.inicio.hora), angular.copy($scope.model.inicio.minuto));
//         var fim = new Date();//.setHours(fim.hora, fim.minuto);
//         fim.setHours(angular.copy($scope.model.fim.hora), angular.copy($scope.model.fim.minuto));
// 
//         var minuto_milis = 60000;
// 
//         var tempo_total_milis = fim.getTime() - inicio.getTime();
//         var tempo_total_min = tempo_total_milis / minuto_milis;
//         var valor_minuto = $scope.model.config[$scope.model.config.length - 1].valor_hora / 60;
//         // var valor_total = Math.round(valor_minuto * tempo_total_min);
//         var valor_total = valor_minuto * tempo_total_min;
// 
//         cadastro.historico[last_index].inicio = inicio;
//         cadastro.historico[last_index].fim = fim;
//         cadastro.historico[last_index].valor_total = valor_total;
//         cadastro.historico[last_index].valor_final = valor_total;
// 
//         ajaxCadastro.updateCadastro(cadastro, function () {
//           delete $scope.model.calendario;
//           listaCadastros();
//         });
//       } else {
//         //criar tela modal
//         window.alert("Hora final deve ser maior que hora inicial");
//       }
//     }
//   };

  // $scope.adicionaTempo = function (cadastro) {
  //   if (cadastro.brincando == true) {
  //     var last_index = (cadastro.historico.length) - 1;            
  //     //adicionando 15 minutos ao tempo final:      
  //     var novo_tempo_final_milis = (new Date(cadastro.historico[last_index].fim)).getTime() + 15 * 60000;
  //     var tempo_total_milis = novo_tempo_final_milis - new Date(cadastro.historico[last_index].inicio).getTime();
  //     var tempo_total_min = tempo_total_milis / 60000;
  //     var valor_minuto = $scope.model.config[$scope.model.config.length - 1].valor_hora / 60;
  //     // var novo_valor_total = Math.round(valor_minuto * tempo_total_min);      
  //     var novo_valor_total = valor_minuto * tempo_total_min;
  //     cadastro.historico[last_index].fim = new Date(novo_tempo_final_milis);
  //     cadastro.historico[last_index].valor_total = novo_valor_total;
  //     cadastro.historico[last_index].valor_final = novo_valor_total;
  //     ajaxCadastro.updateCadastro(cadastro, function () {
  //       listaCadastros();
  //     });
  //   }
  // };


//   $scope.finalizaBrincadeira = function (cadastro) {
//     var last_index = cadastro.historico.length - 1;
//     if (cadastro.historico[last_index].pago == true) {
//       cadastro.brincando = false;   
//       
//       //salvar nova receita
//       var nova_receita = {
//         valor: cadastro.historico[last_index].valor_final,
//         forma_pagamento: cadastro.historico[last_index].forma_pagamento,
//         data: cadastro.historico[last_index].data
//       };
// 
//       $scope.add_receita(nova_receita);
// 
//       ajaxCadastro.updateCadastro(cadastro, function () {
//         listaCadastros();
//       });
//     }
//   };
// 
//   $scope.goHome = function (cadastro) {
//     cadastro.standing_by = false;
//     ajaxCadastro.updateCadastro(cadastro, function () {
//       listaCadastros();
//     });
//   };

  


 
  
  //despesas
  // $scope.filtroDespesas = {
  //   inicio: new Date,
  //   fim: new Date,
  // };
  
  //despesa
  // $scope.despesa = {
  //   valor: 0,
  //   descricao: '',
  //   data: new Date()
  // };

//   function listaDespesas() {
//     //passar função callback para o ajax service    
//     ajaxDespesas.readDespesa(function (data) {
//       $scope.model.despesas.length = 0;
//       $scope.model.despesas = data;
//     });
//   };
// 
//   $scope.add_despesa = function () {
//     var nova_despesa = {
//       valor: angular.copy($scope.despesa.valor),
//       descricao: angular.copy($scope.despesa.descricao),
//       data: get_data_selecionada()
//     }
//     ajaxDespesas.createDespesa(nova_despesa, function () {
//       delete $scope.despesa;
//       delete $scope.model.calendario;
//       listaDespesas();
//     });
//   };
// 
//   $scope.atualiza_despesa = function (despesa) {
//     ajaxDespesas.updateDespesa(despesa, function () {
//       listaDespesas();
//     });
//   };
// 
//   $scope.excluiDespesa = function (id) {
//     ajaxDespesas.deleteDespesa(id, function () {
//       listaDespesas();
//     });
//   };
//   
//   //receita
//   function listaReceita() {
//     //passar função callback para o ajax service
//     ajaxReceita.readReceita(function (data) {
//       $scope.model.receitas.length = 0;
//       $scope.model.receitas = data;
//     });
//   };
// 
//   $scope.add_receita = function (nova_receita) {
//     ajaxReceita.createReceita(nova_receita, function () {
//       listaReceita();
//     });
//   };
// 
//   $scope.atualiza_receita = function (receita) {
//     ajaxReceita.updateReceita(receita, function () {
//       listaReceita();
//     });
//   };
// 
//   $scope.excluiReceita = function (id) {
//     ajaxReceita.deleteReceita(id, function () {
//       listaReceita();
//     });
//   };  
//   
//   //Configuração
//   function getConfiguracao() {
//     //passar função callback para o ajax service
//     ajaxPrecos.readConfig(function (config_data) {
//       //$scope.model.config = angular.fromJson(config_data);
//       $scope.model.config = config_data;
//     });
//   };
// 
//   $scope.configura = function (nova_config) {
//     ajaxPrecos.createConfig(nova_config, function (config_data) {
//       $scope.model.config = config_data;
//     });
//   };
// 
//   $scope.atualiza_config = function () {
//     var config_update = angular.copy($scope.model.config[0]);
//     ajaxPrecos.updateConfig(config_update, function (config_data) {
//       $scope.model.config.length = 0;
//       $scope.model.config = angular.fromJson(config_data);
//       $location.path('/');
//     });
//   };
  
  
});