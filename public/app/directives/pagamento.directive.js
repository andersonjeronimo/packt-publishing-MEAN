angular.module('angularApp').directive('pagamento', function () {
  return {
    restrict: 'E',
    replace: 'true',
    templateUrl: "app/views/pagamento.html",
    scope: {
      diversao: '=diversao'
    },
    controller: function ($scope) {
      $scope.formasDePagamento = ['DEBITO', 'CREDITO', 'DINHEIRO', 'OUTRA'];      
      $scope.calculaValor = function (diversao) {
        
        if ($scope.diversao.adicional == true) {
          $scope.diversao.valorFinal += 2;//busca valor do adicional
        }
        
        // var index = player.historico.length - 1;
        // if (player.historico[index].com_meia) {
        //   player.historico[index].adicional = $scope.model.config[0].valor_par_meias;
        // } else {
        //   player.historico[index].adicional = 0;
        // }
        // player.historico[index].valor_final = (player.historico[index].valor_total - player.historico[index].desconto + player.historico[index].adicional);
        // player.historico[index].troco = (player.historico[index].valor_pago - player.historico[index].valor_final);
      };    
      
      $scope.efetuaPagamento = function (diversao) {
        //if (cadastro.historico[cadastro.historico.length - 1].pago == false) {
        // var last_index = cadastro.historico.length - 1;
        // cadastro.historico[last_index].pago = true;
        // ajaxCadastro.updateCadastro(cadastro, function () {
        //   listaCadastros();
        //});
        //} else {
        //  $scope.modals.open_cant_calculate_dialog();
        // }

      };      

    }
  };
});