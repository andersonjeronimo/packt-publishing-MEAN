angular.module('angularApp').directive('progressBar', function ($timeout, $interval) {
  return {
    restrict: 'EA',
    replace: false,
    transclude: true,
    templateUrl: 'js/partials/barra-progresso.html',
    scope: {
      diversao: '='
    },
    controller: function ($scope) {
      $scope.progresso = 0;
      $scope.tempo_restante = 0;

      $scope.updateProgressBar = function () {
        if ($scope.diversao.iniciada) {
          var inicio = Date.parse($scope.diversao.inicio);
          var fim = Date.parse($scope.diversao.fim);
          var agora = Date.now();

          var tempo_total_millis = (fim - inicio);
          var tempo_decorrido_millis = (agora - inicio);

          var hora_millis = (60000 * 60);
          var minuto_millis = 60000;
          var tempo_restante_millis = (fim - agora);
          var tempo_restante = new Date();
          // tempo_restante.setHours(Math.floor(tempo_restante_millis / hora_millis), Math.floor(tempo_restante_millis / minuto_millis));
          tempo_restante.setHours((tempo_restante_millis / hora_millis), Math.round(tempo_restante_millis / minuto_millis));
          var progresso = Math.round((tempo_decorrido_millis * 100) / tempo_total_millis);
          if (progresso < 100) {
            $scope.progresso = progresso;
            $scope.tempo_restante = tempo_restante;
          } else if (progresso < 0) {
            $scope.progresso = 0;
            $scope.tempo_restante = 0;
          } else {
            $scope.progresso = 100;
            $scope.tempo_restante = tempo_restante;
          }
        };
      };

      $timeout($scope.updateProgressBar, 0);
      $interval($scope.updateProgressBar, 5000);

    }
  }
});