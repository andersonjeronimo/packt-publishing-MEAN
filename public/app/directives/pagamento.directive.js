angular.module('angularApp').directive('pagamento', function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    templateUrl: "app/views/pagamento.html",
    scope: {
      diversao: '=diversao',
      preco: '=preco'            
    },
    controller: function ($scope) {
      $scope.formasDePagamento = ['DEBITO', 'CREDITO', 'DINHEIRO', 'OUTRA'];
      $scope.desconto = 0;
      var precoMinuto = $scope.preco.valorSessao / 60;

      $scope.calculaValor = function () {
        var iniHoras = new Date($scope.diversao.inicio).getHours();
        var iniMinutos = new Date($scope.diversao.inicio).getMinutes();

        var fimHoras = new Date($scope.diversao.fim).getHours();
        var fimMinutos = new Date($scope.diversao.fim).getMinutes();

        var inicioTotalMinutos = iniHoras * 60 + iniMinutos;
        var fimTotalMinutos = fimHoras * 60 + fimMinutos;
        var totalMinutos = fimTotalMinutos - inicioTotalMinutos;

        var valorFinal = Math.round(totalMinutos * precoMinuto);
        var valorAdicional = 0;
        
        ($scope.adicional ? valorAdicional = $scope.preco.valorParMeias : valorAdicional = 0);        
        $scope.diversao.valorFinal = valorFinal + valorAdicional - $scope.desconto;
        $scope.troco = $scope.diversao.valorPago - $scope.diversao.valorFinal;
      };
    }
  };
});

/*
tempo : Schema.Types.Mixed,
	inicio: Date,
	fim: Date,
	iniciada: Boolean,
	finalizada: Boolean,
	paga: Boolean,
	formaDePagamento: String,
	valorAdicional: Number,
	valorPago: Number,
	valorFinal: Number,
	desconto: Number,
	troco: Number,
	nomeCrianca: String,
*/ 