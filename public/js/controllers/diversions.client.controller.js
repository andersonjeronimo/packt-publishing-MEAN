angular.module('angularApp').controller('diversionController', function ($scope, diversionAjaxService, modelService) {
  $scope.model = modelService;
  $scope.diversoes = [];


  function hora_valida() {
    if ($scope.model.fim.hora > $scope.model.inicio.hora) {
      return true;
    } else if ($scope.model.fim.hora == $scope.model.inicio.hora) {
      if ($scope.model.fim.minuto > $scope.model.inicio.minuto) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }


  $scope.inicia = function (diversao) {
    if (diversao.iniciada == false) {
      if (hora_valida()) {
        diversao.iniciada = true;

        var inicio = new Date();
        inicio.setHours(angular.copy($scope.model.inicio.hora), angular.copy($scope.model.inicio.minuto));
        var fim = new Date();
        fim.setHours(angular.copy($scope.model.fim.hora), angular.copy($scope.model.fim.minuto));
        diversao.inicio = inicio;
        diversao.fim = fim;
        
        

//         var minuto_milis = 60000;
// 
//         var tempo_total_milis = fim.getTime() - inicio.getTime();
//         var tempo_total_min = tempo_total_milis / minuto_milis;
//         
//         var valor_minuto = $scope.model.config[$scope.model.config.length - 1].valor_hora / 60;
        // var valor_total = Math.round(valor_minuto * tempo_total_min);
        // var valor_total = valor_minuto * tempo_total_min;

        // cadastro.historico[last_index].valor_total = valor_total;
        // cadastro.historico[last_index].valor_final = valor_total;

        ajaxCadastro.updateCadastro(cadastro, function () {
          delete $scope.model.calendario;
          listaCadastros();
        });
      } else {
        //criar tela modal
        window.alert("Hora final deve ser maior que hora inicial");
      }
    }
  };





});