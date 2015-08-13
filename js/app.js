// (function() {
  var app = angular.module('store', ['store-products']);

    app.controller('StoreController', ['$http', function ($http) {
      this.products = [ ];
      $http.get('data.json').success(function(data) {
        this.products = data;
      }.bind(this))
    }]);

// })();