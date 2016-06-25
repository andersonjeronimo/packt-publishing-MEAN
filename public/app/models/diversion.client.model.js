angular.module('angularApp').factory('diversionModelService', function () {
      return {
            Diversao: function (cadastro) {
                  this.inicio = new Date();
                  this.fim = new Date();
                  this.iniciada = false;
                  this.finalizada = false;
                  this.paga = false;
                  this.formaPagamento = '';
                  this.adicional = false;
                  this.valorPago = 0;
                  this.valorFinal = 0;
                  this.desconto = 0;
                  this.troco = 0;
                  this.registerID = cadastro;
            }
      }
});