angular.module('angularApp').controller('registerController', function ($scope, ajaxAPIService, modelService) {

  $scope.cadastros = [];
  $scope.diversoes = [];
  $scope.model = modelService;

  var URL_CAD = 'http://localhost:3000/registers/'
  var URL_DIV = 'http://localhost:3000/diversions/'


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

  $scope.adicionaDiversao = function (cadastro) {
    if (cadastro.brincando) {
      window.alert('Sessão já iniciada.');
    } else {         
      var diversao = {
        inicio: new Date,
        fim : new Date,
        iniciada: false,
        finalizada: false,
        paga: false,
        formaPagamento: '',
        adicional: false,
        valorPago: 0,
        valorFinal: 0,
        desconto: 0,
        troco: 0,
        registerID: cadastro
      };    

      ajaxAPIService.createEntity(URL_DIV, diversao).success(function (data) {
        $scope.diversoes.push(data);
      });

      cadastro.brincando = true;
      ajaxAPIService.updateEntity(URL_CAD, cadastro).success(function (data) {
        console.log(data);
        listaCadastros();
      });
    }   
	
    //var register = new Register();
    //register.save(...);
	
    // var diversion = new Diversion();
    // diversion.registerID = register;	
    // diversion.save(...);    
  };

  var listaDiversoes = function () {
    ajaxAPIService.listEntities(URL_DIV).success(function (data) {
      $scope.diversoes.length = 0;
      $scope.diversoes = data;
    });
  };


  $scope.iniciaDiversao = function (diversao) {
    if (!(diversao.iniciada)) {
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

        ajaxAPIService.updateEntity(URL_DIV, diversao).success(function (data) {
          console.log(data);
        });
      } else {
        window.alert("Hora final deve ser maior que hora inicial");
      }
    }
  };

  $scope.cancelaDiversao = function (diversao) {
    if (!(diversao.paga)) {
      var cadastroID = diversao.registerID;
      ajaxAPIService.deleteEntity(URL_DIV, diversao).success(function (data) {
        console.log(data);
        ajaxAPIService.readEntity(URL_CAD, cadastroID).success(function (data) {
          console.log(data);
          data.brincando = false;
          ajaxAPIService.updateEntity(URL_CAD, data).success(function (data) {
            console.log(data);
            listaDiversoes();
            listaCadastros();
          })
        });
      });
    } else {
      window.alert("Sessão já foi paga.");
    }
  };
  
  
  // CADASTROS ===================================================================  
  
  $scope.adicionaCadastro = function (cadastro) {
    cadastro.dataNascimento = $scope.model.data_selecionada();
    //cadastro.brincando = false;
    ajaxAPIService.createEntity(URL_CAD, cadastro).success(function (data) {
      delete $scope.cadastro;
      $scope.cadastros.push(data);
    });
  };

  var listaCadastros = function () {
    ajaxAPIService.listEntities(URL_CAD).success(function (data) {
      $scope.cadastros.length = 0;
      $scope.cadastros = data;
    });
  };

  $scope.buscaCadastro = function (id) {
    ajaxAPIService.readEntity(URL_CAD, id).success(function (data) {
      console.log(data);
    });
  };

  $scope.atualizaCadastro = function (cadastro) {
    if (!(cadastro.brincando)) {
      cadastro.dataNascimento = $scope.model.data_selecionada();
      ajaxAPIService.updateEntity(URL_CAD, cadastro).success(function (data) {
        console.log(data);
        listaCadastros();
      });
    } else {
      window.alert("Sessão iniciada. Não é possível atualizar este cadastro.");
    }
  };

  $scope.removeCadastro = function (cadastro) {
    if (!(cadastro.brincando)) {
      ajaxAPIService.deleteEntity(URL_CAD, cadastro).success(function (data) {
        console.log(data);
        listaCadastros();
      });
    } else {
      window.alert("Sessão iniciada. Não é possível remover este cadastro.");
    }
  };

  listaCadastros();
  listaDiversoes();

});