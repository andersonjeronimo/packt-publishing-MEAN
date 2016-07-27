angular.module('angularApp').filter('telefone', function () {
  return function (input) {
    input = input || "";
    var out = "";
    var counter = 0;
    for (var i = 0; i < input.length; i++) {
      if (input.length == 11) {
        for (var i = 0; i < input.length; i++) {
          if (counter == 0) {
            out = "(";
          }
          if (counter == 2) {
            out = out + ")";
          }
          if (counter == 7) {
            out = out + "-";
          }
          out = out + input.charAt(i);
          counter += 1;
        }
      } else {
        for (var i = 0; i < input.length; i++) {
          if (counter == 0) {
            out = "(";
          }
          if (counter == 2) {
            out = out + ")";
          }
          if (counter == 6) {
            out = out + "-";
          }
          out = out + input.charAt(i);
          counter += 1;
        }
      }
      return out;
    }
  }
});